---
layout: page
title: Gallery
---

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
