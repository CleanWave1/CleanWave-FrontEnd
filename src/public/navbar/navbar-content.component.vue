<script>
export default {
  name: "navbar-content"
}
</script>

<template>
  <pv-toolbar style="padding: 0.4rem 2rem; background-color: #9FFFB0;" >
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
          <i class="pi pi-user" style="color:black;"></i>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>