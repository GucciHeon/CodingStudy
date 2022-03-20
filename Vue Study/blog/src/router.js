import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import HomePage from './components/Home.vue';
import DetailPage from './components/Detail.vue';
import unDefinePage from './components/404.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
      path: "/detail/:id",
      component: DetailPage,
  },
  {
      path: "/",
      component: HomePage,
  },
  {
      path: "/:anything(.*)*",
      component: unDefinePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 