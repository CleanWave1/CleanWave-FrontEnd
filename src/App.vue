<script setup>
import Sidebar from '@/public/navbar-profesional/navbar-content.component.vue';
import ToolbarProfesional from "@/public/toolbar-profesional/toolbar-profesional.component.vue";
import Login from '@/components/login-component.vue'
import PayService from "@/components/payService.vue";
</script>

<template>
  <div class="app">
    <router-view />
  </div>
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
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: whitesmoke;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
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
  z-index: 1000;
}

.main-content {
  margin-top: 4rem;
}

</style>
