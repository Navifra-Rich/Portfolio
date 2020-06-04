import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import About from "../components/About.vue";
import Column from "../components/Column.vue";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[
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
  ]
});