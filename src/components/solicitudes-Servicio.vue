<script >
import TableRequestComponent from "@/request/components/table-request.component.vue";
import ToolbarProfesional from "@/public/toolbar-profesional/toolbar-profesional.component.vue";

export default {
  name: "home",
  components: {ToolbarProfesional, TableRequestComponent},
  title: "Home"

}
</script>

<template>
  <ToolbarProfesional></ToolbarProfesional>

  <main id="home">
    <h1>Solicitudes de Servicio</h1>
    <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; width: 800px" class="toolbar">
      <template #start>
        <div class="flex align-items-center gap-2">
          <pv-dropdown placeholder="Todos los servicios" style="padding-left: 10px;"/>
          <div class="flex-auto">
            <pv-calendar showIcon :showOnFocus="false" inputId="buttondisplay"  placeholder="31/04/2024" style="height: 30px; padding-left:10px;"/>
          </div>
          <pv-icon-field iconPosition="right" class="search">
            <pv-input-icon class="pi pi-search"> </pv-input-icon>
            <pv-input-text placeholder= "Buscar" class="labelBuscar"/>
          </pv-icon-field>
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <pv-button label="Share" severity="contrast" size="small" />
        </div>
      </template>
    </pv-toolbar>
    <TableRequestComponent></TableRequestComponent>
  </main>
</template>

<style>

h1{
  color: black;
  font-weight: bold;
  margin-bottom: 8rem;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin:50px;
}

.toolbar{
  display: flex;
  text-align: end;
  justify-content: end;
  align-items: end;
  margin-bottom: 2rem;

}
.labelBuscar{
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 1rem;
}

</style>