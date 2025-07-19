---
title: Beginning HTML ordered lists with numbers other than 1
date: "2010-08-04"
category: markup
tags:
  - html
  - markup
  - ordered list
---

Yes it is possible and easy! You only have to use the (rare/unknown?) `start` attribute at your ordered list element (see example below).

```html
<ol start="4">
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ol>
```

And guess what? It works with negative numbers as well!
