<script>
import NavbarContentComponent from "@/public/navbar/navbar-content.component.vue";

export default {
  name: "home-content-client",
  components: {NavbarContentComponent},
  title:"Home",

  data() {
    return {
      searchText: '',
    };
  },
};

</script>

<template>
  <NavbarContentComponent></NavbarContentComponent>
  <div class="searcher" style="display: flex; padding:30px 0px 60px 190px; gap:20px">

    <pv-icon-field iconPosition="left">
      <pv-input-icon class="pi pi-search" style="line-height:0"> </pv-input-icon>
      <pv-input-text v-model="searchText" placeholder="Buscar..." style="width: 68rem"/>
    </pv-icon-field>
    <pv-button  label="Buscar" severity="contrast" size="small"  outlined style="color:white;
                /*border: 1px solid black;*/ border-radius:0; padding:0 30px"/>
  </div>

  <div class="container flex gap-7 justify-content-center" style="margin: 0px 82px;">
    <pv-card style="width: 22rem; height:673px;overflow: hidden; padding: 0 13px; background-color: #CCFFD5;">
      <template #content>
        <h2>RECOMENDADOS</h2>
        <p style="color:#9d9d9d">Mejor valoradas<br>Más contratadas</p>
        <br>
        <h2>CATEGORÍAS</h2>
        <p style="color:#9d9d9d">Limpieza general<br>Limpieza profunda<br>Limpieza de alfombras<br>Limpieza de ventanas<br>Limpieza de oficinas</p>
        <br>
        <h2>GÉNERO</h2>
        <p style="color:#9d9d9d">Residencial<br>Comercial<br>Areas exteriores<br>Especializada</p>
      </template>
    </pv-card>
    <div class="flex gap-6 flex-wrap flex-center flex-column">
      <pv-card style="width: 70rem; height: 12rem; overflow: hidden; padding: 0 13px; background-color: #CCFFD5;">
        <template #content>
          <div class="p-grid p-fluid">
            <div class="p-col-12">
              <div class="">
                <div class="flex flex-center p-flex-column gap-5 p-mt-1">
                  <div>
                    <img alt="logo" src="@/assets/logo-home-client.png" height="80px" />
                  </div>
                  <div>
                    <h2>ShineBright</h2>
                    <p class="m-0">
                      Es una empresa independiente dedicada a brindar servicios de limpieza residencial y comercial.
                    </p>
                  </div>
                </div>
                <div class="flex flex-center p-flex-column gap-1 mt-3" >
                  <div class="flex gap-1">
                    <pv-button icon="pi pi-plus" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-calendar" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-thumbtack" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                  </div>
                  <div class="flex flex-center gap-1" style="align-items:center; margin-left:300px">
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </pv-card>

      <pv-card style="width: 70rem; height: 12rem; overflow: hidden; padding: 0 13px; background-color: #CCFFD5;">
        <template #content>
          <div class="p-grid p-fluid">
            <div class="p-col-12">
              <div class="">
                <div class="flex flex-center p-flex-column gap-5 p-mt-1">
                  <div>
                    <img alt="logo" src="@/assets/logo-home-client.png" height="80px" />
                  </div>
                  <div>
                    <h2>ShineBright</h2>
                    <p class="m-0">
                      Es una empresa independiente dedicada a brindar servicios de limpieza residencial y comercial.
                    </p>
                  </div>
                </div>
                <div class="flex flex-center p-flex-column gap-1 mt-3" >
                  <div class="flex gap-1">
                    <pv-button icon="pi pi-plus" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-calendar" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-thumbtack" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                  </div>
                  <div class="flex flex-center gap-1" style="align-items:center; margin-left:300px">
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </pv-card>

      <pv-card style="width: 70rem; height: 12rem; overflow: hidden; padding: 0 13px; background-color: #CCFFD5;">
        <template #content>
          <div class="p-grid p-fluid">
            <div class="p-col-12">
              <div class="">
                <div class="flex flex-center p-flex-column gap-5 p-mt-1">
                  <div>
                    <img alt="logo" src="@/assets/logo-home-client.png" height="80px" />
                  </div>
                  <div>
                    <h2>ShineBright</h2>
                    <p class="m-0">
                      Es una empresa independiente dedicada a brindar servicios de limpieza residencial y comercial.
                    </p>
                  </div>
                </div>
                <div class="flex flex-center p-flex-column gap-1 mt-3" >
                  <div class="flex gap-1">
                    <pv-button icon="pi pi-plus" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-calendar" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                    <pv-button icon="pi pi-thumbtack" aria-label="Filter" style="height:30px; width:30px; background-color: #6e9a6e"/>
                  </div>
                  <div class="flex flex-center gap-1" style="align-items:center; margin-left:300px">
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                    <i class="pi pi-star-fill" style="font-size: 1.5rem; color: #d5d506"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </pv-card>

    </div>

  </div>

</template>

