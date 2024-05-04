<script>
import NavbarContent from "@/public/navbar/navbar-content.component.vue"

export default {
  name: "fill-details",
  components: {NavbarContent}
}

import { ref } from 'vue';

const tipoPropiedad = ref(null);
const tipoLimpieza = ref(null);
const tamañoEspacio = ref(null);
const numHabitaciones = ref(null);
const tipoSuelo = ref(null);
const instrucciones = ref(null);
</script>

<template>
  <NavbarContent ></NavbarContent>
  <div class="container">
    <div class="image-container">
      <img src="@/assets/imagen-registrarespacio.jpg" alt="Image"/>
    </div>
    <div class="form-container">
      <h1>Registrar detalles de mi espacio</h1>
      <pv-float-label>
        <input type="text" id="tipoPropiedad" v-model="tipoPropiedad" style="width: 330px" />
        <label for="tipoPropiedad">Tipo de Propiedad</label>
      </pv-float-label>
      <br>
      <pv-float-label>
        <input type="text" id="tipoLimpieza" v-model="tipoLimpieza" style="width: 330px" />
        <label for="tipoLimpieza">Tipo de Limpieza</label>
      </pv-float-label>
      <br>
      <pv-float-label>
        <input type="text" id="tamañoEspacio" v-model="tamañoEspacio" style="width: 330px"/>
        <label for="tamañoEspacio">Tamaño del espacio</label>
      </pv-float-label>
      <br>
      <pv-float-label>
        <input type="text" id="numHabitaciones" v-model="numHabitaciones" style="width: 330px"/>
        <label for="numHabitaciones">Número de habitaciones</label>
      </pv-float-label>
      <br>
      <pv-float-label>
        <input type="text" id="tipoSuelo" v-model="tipoSuelo" style="width: 330px"/>
        <label for="tipoSuelo">Tipo de suelo</label>
      </pv-float-label>
      <br>
      <pv-float-label>
        <textarea id="instrucciones" v-model="instrucciones" style="width: 330px; height: 80px"></textarea>
        <label for="instrucciones">Instrucciones</label>
      </pv-float-label>
      <br>
      <div class="button">
        <router-link to="/inicio" tag="button" class="btn-primary">
          <i class="pi pi-check"></i> Guardar
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.image-container {
  margin-right: 50px;
}

.form-container {
  width: 50%;
}

.button {
  margin-top: 20px;
}

.btn-primary {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: darkgreen;
}

input[type="text"],
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
  display: block;
}
</style>