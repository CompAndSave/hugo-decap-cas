---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
slug: "{{ replace .File.ContentBaseName "-" " " | slug }}"
tags: []
featured_image: ""
description: ""
draft: true
---