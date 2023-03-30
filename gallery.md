---
layout: page
title: Gallery
---

I've always loved art. Recently, I have focused on marker and pen drawings. I love the easy clean-up and how portable everything is. I love how drastically the works change once you do the penwork on top of the marker. Most of the current works came from the [Inktober 2022 Challenge](https://inktober.com/rules). 

<div class="gridcontainer">
  <div class="grid">
      {% for post in site.posts %}
        {% if post.gallery %}
          {% if post.image %}
            <div class="gridcell">
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}
              <img src="{{ post.image }}" />
              </a>
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
  </div>
</div>
