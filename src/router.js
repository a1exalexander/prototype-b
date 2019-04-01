import Vue from 'vue';
import Router from 'vue-router';
import Structure from './views/Structure.vue';
import Types from './views/Types.vue';
import Rules from './views/Rules.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Structure,
    },
    {
      path: '/types',
      name: 'types',
      component: Types,
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules,
    },
    {
      path: '/structure',
      name: 'structures',
      component: Structure,
    },
    {
      path: '/structure/:id',
      name: 'structure',
      component: Structure,
    },
  ]
})
