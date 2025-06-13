---
layout: page
title: academic service
permalink: /service/
description: A list of my teaching, leadership, and other academic service activities.
nav: true
nav_order: 5
horizontal: false
---

<div class="projects">
  {% assign sorted_service = site.service | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
  {% for item in sorted_service %}
    {% include service.liquid item=item %}
  {% endfor %}
  </div>
</div>