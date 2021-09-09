import Vue from 'vue';
import VueRouter from 'vue-router';
import start from "./components/start";
import menu from "./components/menu";
import dashboard from "./components/dashboard";
import content from "./components/content";
import activity_1 from "./components/activity_1";
import activity_2 from "./components/activity_2"
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
        path: '/activity_1',
        name: 'activity_1',
        component: activity_1,
       
      },
      {
path: '/activity_2',
name: 'activity_2',
component: activity_2,
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