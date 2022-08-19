<script setup>
import { siteName, siteSlogan } from "@/constants/settings"
import SocialIcons from "@/components/app/icons/SocialIcons.vue"
</script>
<template>
  <div class="">
    <footer
      class="footer px-10 py-16 border-t bg-base-200 text-base-content border-base-300 flex flex-col place-items-center"
    >
      <AppFooterMenu />
      <SocialIcons />
      <p class="text-xs text-center">
        © {{ new Date().getFullYear() }} {{ siteName }} &middot; All Rights
        Reserved <br />
        {{ siteSlogan }}
      </p>
    </footer>
  </div>
</template>
