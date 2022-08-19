<template>
  <div class="app-wrapper">
    <header class="fixed w-full z-40">
      <!-- nav -->
      <MainNavbar />
    </header>
    <!-- main/nuxtpage -->
    <main class="relative py-20 bg-black">
      <NuxtPage />
    </main>
    <!-- footer -->
    <MainFooter />

    <!-- <div class="flex flex-col h-screen justify-between">
 
  <main class="mb-auto h-10 bg-green-500">Content</main>
  <footer class="h-10 bg-blue-500">Footer</footer>
</div> -->
  </div>
</template>
