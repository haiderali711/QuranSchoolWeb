import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/students",
      name: "StudentList",
      component: () => import("../views/StudentsView.vue"),
    },
    {
      path: "/attendence",
      name: "Attendence",
      component: () => import("../views/AttendenceView.vue"),
    },
    {
      path: "/sign",
      name: "SignInOrUp",
      component: () => import("../views/LogInView.vue"),
    },
    {
      path: "/notfound",
      name: "NotFoundPage",
      component: () => import("../views/404PageView.vue"),
    },
    {
      path: "/signout",
      name: "SignOut",
      component: HomeView,
    },
  ],
});

export default router;
