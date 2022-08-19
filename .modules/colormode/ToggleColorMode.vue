<template>

  <div ref="switcher" class="flex w-12 flex-col items-center justify-center bg-accent rounded-full fixed top-28 left-4">
    <!-- switch track -->
    <div class="switch-track">
      <!-- light -->
      <div ref="switchLight" class="switch-light" @click="$colorMode.preference = 'light'">
        <IconLight />
      </div>
      <!-- dark -->
      <div ref="switchDark" class="switch-dark" @click="$colorMode.preference = 'dark'">
        <IconDark />
      </div>
    </div>
  </div>

  <!-- controls -->
  <div class="btn-group m-4">
    <button @click="resumeAnimation" class="btn btn-primary  ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <button @click="pauseAnimation" class="btn btn-primary  ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import IconLight from '@/components/colormode/icons/light.svg.vue'
import IconDark from '@/components/colormode/icons/dark.svg.vue'

const switcher = ref()
const switchDark = ref()
const switchLight = ref()

const animation = gsap.timeline()

const pauseAnimation = () => {
  console.log('yo stop')
  animation.pause()
}
const resumeAnimation = () => {
  console.log('yo go')
  animation.resume()
}
const restartAnimation = () => {
  console.log('restart yo')
}


onMounted(() => {

  console.log('its our time')

  animation.to(switcher.value, { height: 80, x: 200, duration: 14 })
  animation.to(switchDark.value, {
    rotation: '+=360'
  })

});
</script>
