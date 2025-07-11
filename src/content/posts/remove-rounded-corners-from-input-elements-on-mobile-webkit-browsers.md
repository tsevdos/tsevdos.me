---
title: Remove rounded corners from input elements on mobile webkit browsers
date: "2012-09-05"
category: css
tags:
  - css
  - browser
  - corners
  - element
  - form
  - input
  - ios
  - mobile
  - rounded
  - safari
  - webkit
---

Mobile Safari is probably the best browser solution for iOS devices. The browser offers many advanced features and some eye-candy form elements to interact with. These eye-candy form elements already have some default webkit-only styles and can make your life a bit harder if you want to style them differently. Anyway, cutting a long story short, if you don't want input elements to have rounded corners, just use the CSS rule shown below:

```css
input {
  -webkit-appearance: none;
}
```
