<script>
export default {
  name: "navbar-content"
}
</script>

<template>
  <pv-toolbar style="padding: 0.4rem 4rem; background-color: #9FFFB0;" >
    <template #start>
      <div class="">
        <img src="@/assets/cleanwave-logo.png" height="63px" alt="logo-cleanwave">
      </div>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <pv-button label="Inicio" text plain style="font-weight:900"/>
        <pv-button label="Servicios" text plain/>
        <pv-button label="Ayuda" text plain/>
        <div class="flex align-items-center gap-2">
          <pv-button label="Programar limpieza" severity="contrast" size="small"  outlined style="background-color:white;
          border: 1px solid black; border-radius:0; margin:0 20px "/>
          <pv-button icon="pi pi-user" severity="primary" rounded aria-label="User" style="color:gray; width:2.5rem; height:2.5rem; background-color:rgba(239,239,239,0.83)" />

        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
  pv-toolbar {
    z-index: 1000;
    position: fixed;
  }
</style>