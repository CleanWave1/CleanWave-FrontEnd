<script setup>
import { ref } from 'vue';

const tipoPropiedad = ref(null);
const tipoLimpieza = ref(null);
const tamañoEspacio = ref(null);
const numHabitaciones = ref(null);
const tipoSuelo = ref(null);
const instrucciones = ref(null);
</script>

<template>

  <div class="image-container">
    <pv-image src="src\imagen-registrarespacio.jpg" alt="Image"/>
  </div>
  <br>
  <br>
  <h1>Registrar detalles de mi espacio</h1>
  <div class="form-container">
    <pv-floatLabel>
      <pv-inputText id="tipoPropiedad" v-model="tipoPropiedad" style="width: 330px" />
      <label for="tipoPropiedad">Tipo de Propiedad</label>
    </pv-floatLabel>
    <br>
    <pv-floatLabel>
      <pv-inputText id="tipoLimpieza" v-model="tipoLimpieza" style="width: 330px" />
      <label for="tipoLimpieza">Tipo de Limpieza</label>
    </pv-floatLabel>
    <br>
    <pv-floatLabel>
      <pv-inputText id="tamañoEspacio" v-model="tamañoEspacio" style="width: 330px"/>
      <label for="tamañoEspacio">Tamaño del espacio</label>
    </pv-floatLabel>
    <br>
    <pv-floatLabel>
      <pv-inputText id="numHabitaciones" v-model="numHabitaciones" style="width: 330px"/>
      <label for="numHabitaciones">Número de habitaciones</label>
    </pv-floatLabel>
    <br>
    <pv-floatLabel>
      <pv-inputText id="tipoSuelo" v-model="tipoSuelo" style="width: 330px"/>
      <label for="tipoSuelo">Tipo de suelo</label>
    </pv-floatLabel>
    <br>
    <pv-floatLabel>
      <pv-inputText id="instrucciones" v-model="instrucciones" style="width: 330px; height: 80px"/>
      <label for="instrucciones">Instrucciones</label>
    </pv-floatLabel>
    <br>
    <div class="button">
      <pv-button label="Guardar" icon="pi pi-check" style="background-color: green; margin: 0 auto;"  />
    </div>
  </div>

</template>

<style >
.image-container {
  float: left;
  margin-right: 150px;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 60px;
  text-align: center;
}
.button {
  margin-top: 10px;
}
</style>
