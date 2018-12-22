import Vue from 'vue'
import Router from 'vue-router'
import Servicios from './views/Servicios.vue'
import Experiencias from './views/Experiencias.vue'
import Conocenos from './views/Conocenos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path:'/experiencias',
      name:'experiencias',
      component:Experiencias
    },
    {
      path:'/conocenos',
      name:'conocenos',
      component:Conocenos
    },
    {
      path: '/contacto',
      name: 'contacto',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contacto.vue')
    }
  ]
})
