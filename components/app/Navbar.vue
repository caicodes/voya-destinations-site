<script setup>
import { NavMenuItems } from "@/constants/menus"
</script>

<template>
  <nav class="navbar h-20 bg-black/60">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden"
          ><AppIconsMobileMenu />
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <NuxtLink to="/"><AppIconsLogo class="h-16 w-auto ml-2" /></NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0 space-x-4">
        <li v-for="item in NavMenuItems">
          <NuxtLink
            :to="item.to"
            class="btn btn-ghost hover:bg-inherit hover:text-neutral"
            >{{ item.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink to="register" class="btn btn-sm rounded-full"
        >register free</NuxtLink
      >
      <div class="mr-12 ml-1"><ColormodeToggleColorMode /></div>
    </div>
  </nav>
</template>
