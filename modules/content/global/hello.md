# Hello Viewer

Message is from `/content/global/hello.md`

...can be imported with...

```javascript
<script setup>
const { data } = await useAsyncData('hello', () => queryContent('/global/hello').findOne())
</script>
<template>
  <ContentRenderer :value="data" />
</template>

```