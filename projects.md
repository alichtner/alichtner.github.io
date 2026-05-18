---
layout: page
title: Projects
---

<div class="gridcontainer">
  <div class="grid">
      {% for project in site.posts %}
        {% if project.project %}
          <div class="gridcell">
            <a class="post-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}
            {% if project.image %}
              <img src="{{ project.image }}" />
            {% endif %}
            </a>
          </div>
        {% endif %}
      {% endfor %}
  </div>
</div>
