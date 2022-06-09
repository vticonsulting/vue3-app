<script setup lang="ts">
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const menu = ref([
  {
    header: 'Main Navigation',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Dashboard',
    icon: 'fa fa-user',
  },
  {
    href: '/about',
    title: 'About',
    icon: 'fa fa-chart-area',
  },
])
</script>

<template>
  <div class="min-h-screen u-bg-black">
    <sidebar-menu :menu="menu" />
    <slot />
  </div>
</template>
