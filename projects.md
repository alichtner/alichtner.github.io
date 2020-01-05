---
layout: page
title: Projects
---

<div class="gridcontainer">
  <div class="grid">
      {% for project in site.posts %}
        {% if project.project %}
          {% if project.image %}
            <div class="gridcell">
              <a class="post-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
              <img src="{{ project.image }}" />
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
  </div>
</div>
