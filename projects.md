---
layout: page
title: Projects
---

<div class="home">
  <ul class="post-list">
    {% for project in site.projects %}
      <li>
        <h2>
          <a class="post-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
</div>