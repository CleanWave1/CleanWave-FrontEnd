<script>
import NavbarContent from "@/public/navbar/navbar-content.component.vue"
import { ref } from 'vue';

export default {
  name: "support",
  components: {NavbarContent}
}

const consulta = ref(null);
</script>

<template>
  <NavbarContent ></NavbarContent>
  <div class="support-content">
    <br><br><br>
    <h1 class="title">Soporte al cliente</h1>
    <br><br><br>
    <div class="card">
      <pv-accordion :activeIndex="0" class="accordion">
        <pv-accordionTab header="¿Cómo usar la aplicación?" class="accordion-tab">
          Contenido del primer panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Qué se incluye en mi suscripción?" class="accordion-tab">
          Contenido del segundo panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Cómo puedo programar servicios de limpieza?" class="accordion-tab">
          Contenido del tercer panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Está mi información personal segura?" class="accordion-tab">
          Contenido del cuarto panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Cómo me mantengo en contacto con la aplicación?" class="accordion-tab">
          Contenido del quinto panel
        </pv-accordionTab>
      </pv-accordion>
    </div>
  </div>

  <div class="floatlabel">
    <br><br><br>
    <h2 class="title">Formulario de consulta</h2>
    <div class="input-container">
      <pv-float-label>
        <textarea id="consulta" v-model="value" style="width: 100%; height: 100px"></textarea>
        <label for="consulta">Escriba su consulta</label>
      </pv-float-label>
    </div>
    <div class="button-container">
      <pv-button label="Enviar" style="width: 200px; height: 50px; margin-top: 20px;" />
    </div>
  </div>
</template>

<style>
.support-content {
  margin-left: 150px;
  margin-right: 150px;
}

.title {
  font-size: 30px;
}

.card {
  font-size: 18px;
}

.floatlabel {
  margin-top: 50px;
  margin-left: 150px;
  margin-right: 150px;
}

.input-container {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.accordion {
  width: 100%;
  max-width: 800px;
}

.accordion-tab {
  padding: 20px;
  font-size: 20px;
}
</style>






