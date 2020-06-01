import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Column from "../views/Column.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Column",
    name: "Column",
    component: Column
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
