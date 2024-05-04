<script>
import { ref } from 'vue';

const consulta = ref(null);
</script>

<template>
  <div class="support-content">
    <br><br><br>
    <h1 class="title">Soporte al cliente</h1>
    <br><br><br>
    <div class="card">
      <pv-accordion :activeIndex="0">
        <pv-accordionTab header="¿Cómo usar la aplicación?">
          Contenido del primer panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Qué se incluye en mi suscripción?">
          Contenido del segundo panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Cómo puedo programar servicios de limpieza?">
          Contenido del tercer panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Está mi información personal segura?">
          Contenido del cuarto panel
        </pv-accordionTab>
        <pv-accordionTab header="¿Cómo me mantengo en contacto con la aplicación?">
          Contenido del quinto panel
        </pv-accordionTab>
      </pv-accordion>
    </div>
  </div>

  <div class="floatlabel">
    <br><br><br>
    <div class="input-container">
      <pv-floatLabel>
        <pv-inputText id="consulta" v-model="value" style="width: 900px; height: 100px"/>
        <label for="consulta">Escriba su consulta</label>
      </pv-floatLabel>
      <pv-button label="Enviar" style="width: 200px; height: 50px; margin-left:80px; margin-top:20px"  />
    </div>
  </div>


</template>

<style>
.support-content {
  text-align: center;
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
  display: flex;
  flex-direction: column;
  margin-left: 150px;
}

.input-container {
  display: flex;
}




</style>





