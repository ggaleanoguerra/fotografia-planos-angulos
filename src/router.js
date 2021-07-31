import Vue from 'vue';
import VueRouter from 'vue-router';
import inicio from "./components/inicio";
import menu from "./components/menu";
import dashboard from "./components/dashboard";
import contenido from "./components/contenido";
import actividades from "./components/actividades";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio,
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu,

    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
      },
      {
        path: '/contenido',
        name: 'contenido',
        component: contenido,
      },
      {
        path: '/actividades/',
        name: 'actividades',
        component: actividades,
       
      },
      {
        path: '/evaluacion',
        name: 'evaluacion',
        component: evaluacion,

      },

      {
        path: '/creditos',
        name: 'creditos',
        component: creditos,

      },]
  },];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;