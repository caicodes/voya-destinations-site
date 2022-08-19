<template>
  <div class="app-wrapper">
    <header class="fixed w-full z-40 bg-base-300/20">
      <!-- nav -->
      <AppNavbar />
    </header>
    <!-- main/nuxtpage -->
    <main class="relative py-20 bg-black/5">
      <NuxtPage />
    </main>
    <!-- footer -->
    <AppFooter />
  </div>
</template>
