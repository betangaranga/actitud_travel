<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <section>
      <div class="services-grid">

       <div class="service service1" v-for="service in services">
        <h4>{{service.name}}</h4>

         <img id="icono" v-bind:src="service.img" alt="">
      <p>{{service.intro}}</p>
      <a href="#" class="cta">Conoce más <span class="ti-angle-right"></span></a>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
 import {
        functions
    } from 'firebase';
    import {
        db
    } from '../main'
export default {
  name: 'services',
  props: {
    msg: String
  },
  data(){
    return{
      services:[]
    }
  },
   firestore() {
            return {
                services: db.collection("actitud_travel").doc("sistema").collection("servicios")
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}
#icono{
  height: 5em;
}
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1px;
}

p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 3000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  position: relative;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #5b7abb;
  display: block;
}

.service h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 1.3rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  height: 30em;
  padding: 20px;
  margin-right: 1em;
  margin-left: 1em;
  border-radius: 40px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service1 i,
.service1 h4,
.service1 .cta {
  color:black;
}

.service1:hover {
  border: 2px solid #e4007c;
}


.service .cta span {
  font-size: 0.6rem;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}
@media all and (max-width:1500px) {
  .service{
    height: 35em;
    width: 100%;
    position: relative;
    top: -6em;
    margin-top: 4em;
    margin-bottom: 0
  }
  .cta{
    position: relative;
    top: -2em
  }

  
}
@media all and (max-width:1000px) {
  .service{
    height: 25em;
    width: 100%;
    position: relative;
    top: -2em;
    margin-top: 4em;
    margin-bottom: 0
  }
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  
}
@media all and (max-width:1200px) {
  .service{
    height: 30em;
    width: 100%;
    position: relative;
    top: -2em;
    margin-top: 4em;
    margin-bottom: 0
  }
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  
}
</style>
