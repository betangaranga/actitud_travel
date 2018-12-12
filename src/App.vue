<template>
  <div id="app">
    <modal name="sectur" :width="700" :height="750" :pivotY=".5" :draggable="true" :adaptive="true">
      <img src="./assets/RNT-1.png" alt="" height="100%">

    </modal>
    <modal name="moderniza" :width="700" :height="750" :pivotY=".5" :draggable="true" :adaptive="true">
      <img src="./assets/m-actitud.jpeg" alt="" >

    </modal>
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <nav>
      <div class="menu_movil">
        <md-menu>
          <md-button class="md-icon-button" md-menu-trigger>
            <img src="./assets/menu.png" id="menu_mov" alt="SIN IMAGEN">
          </md-button>

          <md-menu-content v-bind:style="menu_movil">
            <md-menu-item>
              <md-button md-raised md-primary><a href="">
                  <router-link to="/conocenos">Quienes somos</router-link>
                </a></md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button md-raised md-primary>
                <a href="">
                  <router-link to="/servicios">Servicios</router-link>
                </a>
              </md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button md-raised md-primary>
                <a>
                  <router-link to="/experiencias">Experiencias</router-link>
                </a>
              </md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button md-raised md-primary>
                <a href="">
                  <router-link to="/contacto">Contacto</router-link>
                </a>
              </md-button>
            </md-menu-item>

          </md-menu-content>
        </md-menu>
        <div id="log">
          <img src="./assets/logo.png" alt="" id="logo"><span>ACTITUD TRAVEL</span>
        </div>
      </div>
      <div class="menu_normal">
        <md-menu md-direction="top-end" v-bind:style="actitud">
          <md-button md-raised md-primary @click="moderniza"><img src="./assets/m-logo.png" alt="" id="logo"><span></span></md-button>
        </md-menu>
        <md-menu md-direction="top-end" v-bind:style="actitud">
          <md-button md-raised md-primary @click="sectur"><img src="./assets/SECTUR.jpg" alt="" id="logo_sectur"><span></span></md-button>
        </md-menu>
        <md-menu md-direction="bottom-start" v-bind:style="nav">
          <md-button md-raised md-primary><a href="">
              <router-link to="/conocenos">Quienes somos</router-link>
            </a></md-button>
        </md-menu>

        <md-menu md-direction="bottom-end" v-bind:style="nav">
          <md-button md-raised md-primary>
            <router-link to="/servicios">Servicios</router-link>
          </md-button>
        </md-menu>
        <md-menu md-direction="top-end" v-bind:style="actitud">
          <md-button md-raised md-primary><img src="./assets/logo.png" alt="" id="logo"><span>ACTITUD TRAVEL</span></md-button>
        </md-menu>
        <md-menu md-direction="top-start" v-bind:style="nav">
          <md-button md-raised md-primary>
            <router-link to="/experiencias">Experiencias</router-link>
          </md-button>

        </md-menu>

        <md-menu md-direction="top-end" v-bind:style="nav">
          <md-button md-raised md-primary>
            <router-link to="/contacto">Contacto</router-link>
          </md-button>
        </md-menu>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nav: {
          margin: "2em 10em 2em 2em"
        },
        actitud: {
          float: "left",
          position: "relative",
          top: "2em",
          margin: "auto"
        },
        menu_movil: {
          background: "black",
          color: "white",


        }
      }
    },
    methods: {
      sectur() {
        this.$modal.show('sectur')
      },
      moderniza() {
        this.$modal.show('moderniza')

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Quicksand', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    background-color: black;
  }

  span {
    color: white;
    font-weight: bold
  }

  nav a {
    font-weight: bold;
    text-decoration: none;
    color: white
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #logo {
    width: 2.5em;
  }

  #logo_sectur {
    width: 5em;
    height: 100%;
  }

  .menu_movil {
    display: none
  }

  @media only screen and (max-width: 900px) {
    .menu_normal {
      display: none
    }

    a {
      color: white
    }


    .menu_movil {
      display: flex;
      position: relative;
      z-index: 1000;

    }

    #log {
      margin: auto
    }

    #logo {
      margin: auto;
      height: 100%;
    }


  }
</style>