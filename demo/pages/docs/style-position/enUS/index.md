# Style Element Position

Sometimes you want to control where the style element should be inserted.

For example. If you have a tailwind reset style, you don't want it to be inserted after naive-ui's style. Since it may overrides button's style, etc.

You can create a `<meta name="naive-ui-style" />` element inside `head` element, then naive-ui's style will be inserted right before it.

Also, naive-ui uses [vueuc](https://github.com/07akioni/vueuc). If you need, its style can be controlled by `<meta name="vueuc-style" />` (generally it's not needed).

```html
<head>
  <xxx />
  <!-- naive-ui's style will be inserted here -->
  <meta name="naive-ui-style" />
  <!-- vueuc's style will be inserted here -->
  <meta name="vueuc-style" />
  <xxx />
</head>
```

## About tailwind's style override

You may find add meta tag to your static html files doesn't work (naive's style would still be overrided), since your toolchain may always insert tailwind style at the end of head tag. In this situation, you need to insert meta tag dynamically right before app is mounted.

```ts
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

vueApp.mount('#app')
```
