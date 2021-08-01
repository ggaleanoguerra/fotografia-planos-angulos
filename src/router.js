import Vue from 'vue';
import VueRouter from 'vue-router';
import start from "./components/start";
import menu from "./components/menu";
import dashboard from "./components/dashboard";
import content from "./components/content";
import activities from "./components/activities";
import evaluation from "./components/evaluation";
import credits from "./components/credits";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: start,
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
        path: '/content',
        name: 'content',
        component: content,
      },
      {
        path: '/activities',
        name: 'activities',
        component: activities,
       
      },
      {
        path: '/evaluation',
        name: 'evaluation',
        component: evaluation,

      },

      {
        path: '/credits',
        name: 'credits',
        component: credits,

      },]
  },];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
