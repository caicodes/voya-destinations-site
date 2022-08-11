# Voya Destinations... 

Started from a snazzy starter in parallel as it grows. Setting up a 'workspace' or examples master repo would be nice... yarn workspaces are perhaps a little tricky, but it could be ideal. I will figure it out as we build, same reason for forking this and moving forward on the Voya Destinations project.

## A Nuxt Deluxe project

<img src="./project/status-update.png" />

Now, with a fancy spinner welcome, we have the completed starter... The ui, the styling, the theming, and the animations are all fully loaded and ready to go with

- TailwindCSS 
- daisyUI
- GSAP 
- Nuxt Color Mode
- Soon to be added...
  - @nuxt/content
  - firebase
  - @tailwindcss/templates/themes/storybook etc... 

This project to showcase a variety of projects...

-   StripeSafePay (Stripe)
-   PhoenixFire (Firebase)
-   Butterfly (Flutter)
-   DaisiesInTheWind (Next Blog)
-   TailwindCSS Themes (Artasce)
-   TailwindCSS Templates (Artasce)
-   PinaColada (Pinia)


# Now with Nuxt Content...

```javascript
<template>
    <main>
        <ContentDoc class="prose" />
    </main>
</template>

```

<img src="./project/hello-content.png" />

Next, sidebars, filler stuff such as copyright, etc... all in portable amazing content directories! Time to start creatin come...
```javascript
<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <div v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </div>
    </ContentNavigation>
  </nav>
</template>

```
