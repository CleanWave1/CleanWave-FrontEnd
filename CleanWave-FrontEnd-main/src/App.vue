<script setup>
import Sidebar from '@/public/navbar-profesional/navbar-content.component.vue';
import ToolbarProfesional from "@/public/toolbar-profesional/toolbar-profesional.component.vue";

</script>

<template>

</template>

<style lang="scss">
:root {
  --primary: #21272A;
  --primary-alt: #9FFFB0;
  --grey: #64748b;
  --dark: #DCFFE2;
  --dark-alt: #9FFFB0;
  --light: #21272A;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: whitesmoke;
}

.app {
  display: flex;
  flex-direction: column;
}

.ToolbarProfesional {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  z-index: 1000; /* To make sure it's above other content */
}

.main-content {
  margin-top: 4rem; /* Adjust this according to your ToolbarProfesional height */
}

</style>
