<template>
  <div class="flex gap-8 flex-wrap justify-center">
    <NuxtLink v-for="item in footerMenuItems" :to="item.to">{{
      item.title
    }}</NuxtLink>
  </div>
</template>
<script setup>
import { footerMenuItems } from "@/constants/menus"
</script>
