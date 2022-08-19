<template>
  <div
    ref="switcher"
    class="switch-container flex w-12 flex-col items-center justify-center right-4 top-20 absolute"
    @mouseover="showSwitches"
    @mouseleave="hideSwitches"
  >
    <!-- switch track -->
    <div ref="switchTrack" class="switch-track bg-accent rounded-full">
      <!-- light -->
      <div
        ref="switchLight"
        class="switch"
        :class="$colorMode.preference === 'light' ? 'active' : ''"
        @click="$colorMode.preference = 'light'"
      >
        <IconLight />
      </div>
      <!-- dark -->
      <div
        ref="switchDark"
        class="switch"
        :class="$colorMode.preference === 'dark' ? 'active' : ''"
        @click="$colorMode.preference = 'dark'"
      >
        <IconDark />
      </div>
      <!-- system -->
      <div
        ref="switchSystem"
        class="switch"
        :class="$colorMode.preference === 'system' ? 'active' : ''"
        @click="$colorMode.preference = 'system'"
      >
        <IconSystem />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"
import IconLight from "@/components/colormode/icons/light.svg.vue"
import IconDark from "@/components/colormode/icons/dark.svg.vue"
import IconSystem from "@/components/colormode/icons/system.svg.vue"

const animation = gsap.timeline()

const switcher = ref()
const switchTrack = ref()
const switchDark = ref()
const switchLight = ref()
const switchSystem = ref()

const showSwitches = () => {
  gsap.to(switchTrack.value, { height: 120 })
  gsap.to(switchLight.value, {
    y: "0",
  })
  gsap.to(switchDark.value, {
    y: "0",
  })
  gsap.to(switchSystem.value, {
    y: "0",
  })
}

const hideSwitches = () => {
  gsap.to(switchTrack.value, { height: 40 })
  gsap.to(switchDark.value, {
    y: "-40",
  })
  gsap.to(switchSystem.value, {
    y: "-80",
  })
}

onMounted(() => {
  console.log("its our time")

  gsap.fromTo(switcher.value, { y: -200 }, { y: 0, duration: 1 })

  animation
    .to(switchLight.value, {
      rotation: "+=360",
      delay: 1,
    })
    .to(switchDark.value, {
      rotation: "+=360",
    })
    .to(switchSystem.value, {
      rotation: "+=360",
    })
    .to(switchSystem.value, {
      y: "-80",
    })
    .to(switchDark.value, {
      y: "-40",
    })
    .to(".switch-track", {
      height: "40",
    })
})
</script>

<style>
.switch {
  @apply p-2 text-accent-content cursor-pointer rounded-full relative z-0 transition-colors duration-500;
}
.active {
  @apply z-10 bg-accent-focus;
}
</style>
