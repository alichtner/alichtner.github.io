---
layout: page
title: Projects
---

<div class="home">
  <ul class="post-list">
    {% for project in site.projects %}
      <li>
        {{ project.title }}
      </li>
    {% endfor %}
  </ul>
</div>