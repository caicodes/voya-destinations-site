<script setup>
const { data } = await useAsyncData('hello', () => queryContent('/global/hello').findOne())
</script>
<template>
    <ContentRenderer :value="data" class="prose">
        <slot />
    </ContentRenderer>
</template>