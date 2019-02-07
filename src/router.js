import Vue from "vue";
import Router from "vue-router";
import PhotosList from "./modules/PhotosList/PhotosList";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "photosList",
      component: PhotosList
    }
  ]
});
