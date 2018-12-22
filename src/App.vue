<template>
  <div id="app">


    <modal name="sectur" :width="700" :height="750" :pivotY=".5" :draggable="true" :adaptive="true">
      <img src="./assets/RNT-1.png" alt="" height="100%">

    </modal>
    <modal name="moderniza" :width="700" :height="750" :pivotY=".5" :draggable="true" :adaptive="true">
      <img src="./assets/m-actitud.jpeg" alt="">

    </modal>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/materialize-stepper@3.0.0-beta.1.1.1/dist/css/mstepper.min.css">
    <link href="https://fonts.googleapis.com/css?family=Fredoka+One|Sarala" rel="stylesheet">
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
        <md-menu md-direction="bottom-start" v-bind:style="nav">

          <img src="./assets/logo.png" alt="" id="logo"><span>ACTITUD TRAVEL</span>
        </md-menu>

        <md-menu md-direction="bottom-start" v-bind:style="nav">
          <router-link to="/conocenos">Quienes somos</router-link>

        </md-menu>

        <md-menu md-direction="bottom-end" v-bind:style="nav">
          <router-link to="/servicios">Servicios</router-link>
        </md-menu>

        <md-menu md-direction="top-start" v-bind:style="nav">
          <router-link to="/experiencias">Experiencias</router-link>

        </md-menu>

        <md-menu md-direction="top-end" md-align-trigger="false">
          <router-link to="/contacto">Contacto</router-link>
        </md-menu>
      </div>
    </nav>
    <router-view />
    <md-bottom-bar md-type="" v-bind:style="footer">
      <md-bottom-bar-item md-label="Home" md-icon="home">
        <img src="./assets/m-logo.png" alt="" id="logo_extra" @click="moderniza"><span></span>

      </md-bottom-bar-item>
      <md-bottom-bar-item md-label="Pages" md-icon="pages">
        <img @click="sectur" src="./assets/SECTUR.jpg" alt="" id="logo_sectur"><span></span>

      </md-bottom-bar-item>
      <md-bottom-bar-item md-label="Pages" md-icon="pages" v-bind:style="priv">
        AVISO DE PRIVACIDAD
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nav: {
          margin: "2em 8em 2em 2em"
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
        },
        footer: {
          background: "white",
          zindex: "100"

        },
        priv: {
          color: "black",
          position: "relative",

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
.md-menu{
  display: none
}
  .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: grey;
    text-align: center;
    height: 8%;
  }

  .logo_principal {
    float: left;
    margin: .5;
  }

  #app {
    font-family: 'Quicksand', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #logo_extra {
    width: 50%;
    height: 100%;
  }

  nav {
    background-color: black;
    z-index: 1000;
  }

  span {
    color: white;
    font-weight: bold;

  }

  nav a {
    font-weight: bold;
    text-decoration: none;
    color: white;
    margin: auto;
    font-size: 1.3em;

  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #logo {
    width: 4em;

  }

  #logo_sectur {
    width: 10em;
    height: 100%;
  }

  .menu_movil {
    display: none
  }

  @media only screen and (max-width: 1500px) {
    .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: grey;
    text-align: center;
    height: 12%;
      }
      nav{
            z-index: 1000;

      }
  }

  @media only screen and (max-width: 1200px) {
    .menu_normal {
      display: none;
    }

    .md-bottom-bar {
      display: none
    }

    a {
      color: white
    }

    nav {
      position: fixed;
      z-index: 1000;
      width: 100%;
      top: 0;
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
      width: 2.5em;
      position: relative;
      top: 0;
      right: 0;
    }

    span {
      position: relative;
      top: .1em;
      right: 0;
    }
  }

  @media only screen and (max-width: 750px) {
 
    

    a {
      color: white
    }

    nav {
      position: fixed;
      z-index: 1000;
      width: 100%;
      top: 0;
      overflow: hidden;

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
      position: relative;
      right: 0;
    }

    span {
      position: relative;
      right: 0;
    }

  }
</style>