#!/usr/bin/env python3
"""
compress_images.py — Resize and compress images for web upload.

Usage:
    python3 compress_images.py /path/to/folder
    python3 compress_images.py /path/to/folder --max-width 1600 --quality 75
    python3 compress_images.py /path/to/folder --output /path/to/output

Output is saved to a 'web/' subfolder inside the input folder by default.
Originals are never modified.
"""

import argparse
import os
import sys
from pathlib import Path
from PIL import Image, ExifTags

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".tiff", ".bmp"}


def fix_orientation(img):
    """Rotate image to match EXIF orientation so it isn't sideways after resizing."""
    try:
        exif = img._getexif()
        if exif is None:
            return img
        orientation_key = next(
            k for k, v in ExifTags.TAGS.items() if v == "Orientation"
        )
        orientation = exif.get(orientation_key)
        rotations = {3: 180, 6: 270, 8: 90}
        if orientation in rotations:
            img = img.rotate(rotations[orientation], expand=True)
    except (AttributeError, StopIteration, Exception):
        pass
    return img


def compress_image(input_path, output_path, max_width, max_height, quality):
    """Resize and compress a single image. Returns (original_bytes, new_bytes)."""
    original_size = input_path.stat().st_size

    with Image.open(input_path) as img:
        # Fix EXIF rotation before resizing
        img = fix_orientation(img)

        # Convert palette/transparency modes for JPEG compatibility
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        # Resize only if larger than the max dimensions
        w, h = img.size
        if w > max_width or h > max_height:
            img.thumbnail((max_width, max_height), Image.LANCZOS)

        # Determine output format
        suffix = input_path.suffix.lower()
        if suffix in (".jpg", ".jpeg"):
            save_kwargs = {"format": "JPEG", "quality": quality, "optimize": True}
        elif suffix == ".png":
            save_kwargs = {"format": "PNG", "optimize": True}
        elif suffix == ".webp":
            save_kwargs = {"format": "WEBP", "quality": quality, "method": 6}
        else:
            # Fall back to JPEG for other formats
            output_path = output_path.with_suffix(".jpg")
            save_kwargs = {"format": "JPEG", "quality": quality, "optimize": True}

        output_path.parent.mkdir(parents=True, exist_ok=True)
        img.save(output_path, **save_kwargs)

    new_size = output_path.stat().st_size
    return original_size, new_size


def main():
    parser = argparse.ArgumentParser(description="Compress images for web upload.")
    parser.add_argument("folder", help="Path to the folder of images")
    parser.add_argument(
        "--max-width", type=int, default=1800,
        help="Maximum width in pixels (default: 1800)"
    )
    parser.add_argument(
        "--max-height", type=int, default=1800,
        help="Maximum height in pixels (default: 1800)"
    )
    parser.add_argument(
        "--quality", type=int, default=80,
        help="JPEG/WebP compression quality, 1-95 (default: 80)"
    )
    parser.add_argument(
        "--output", type=str, default=None,
        help="Output folder (default: <input_folder>/web/)"
    )
    args = parser.parse_args()

    input_folder = Path(args.folder).expanduser().resolve()
    if not input_folder.is_dir():
        print(f"Error: '{input_folder}' is not a directory.")
        sys.exit(1)

    output_folder = Path(args.output).expanduser().resolve() if args.output else input_folder / "web"

    images = [
        f for f in input_folder.iterdir()
        if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
    ]

    if not images:
        print(f"No supported images found in '{input_folder}'.")
        print(f"Supported formats: {', '.join(SUPPORTED_EXTENSIONS)}")
        sys.exit(0)

    print(f"\nCompressing {len(images)} image(s)")
    print(f"  Max dimensions : {args.max_width} x {args.max_height} px")
    print(f"  Quality        : {args.quality}")
    print(f"  Output folder  : {output_folder}\n")

    total_original = 0
    total_new = 0
    errors = []

    for img_path in sorted(images):
        output_path = output_folder / img_path.name
        try:
            orig, new = compress_image(
                img_path, output_path,
                args.max_width, args.max_height, args.quality
            )
            total_original += orig
            total_new += new
            savings = (1 - new / orig) * 100 if orig > 0 else 0
            print(f"  {img_path.name:<40} {orig/1024:>7.0f} KB → {new/1024:>6.0f} KB  ({savings:.0f}% smaller)")
        except Exception as e:
            errors.append((img_path.name, str(e)))
            print(f"  {img_path.name:<40} ERROR: {e}")

    total_savings = (1 - total_new / total_original) * 100 if total_original > 0 else 0
    print(f"\n  Total: {total_original/1024/1024:.1f} MB → {total_new/1024/1024:.1f} MB  ({total_savings:.0f}% smaller)")
    print(f"  Saved to: {output_folder}")

    if errors:
        print(f"\n  {len(errors)} file(s) failed: {', '.join(e[0] for e in errors)}")


if __name__ == "__main__":
    main()
