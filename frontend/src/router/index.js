import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Package from "../views/Package.vue";
import Contact from "../views/Contact.vue";
import Test from "../views/Testpage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "About",
      },
    },
    {
      path: "/package",
      name: "package",
      component: Package,
      meta: {
        title: "Package",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: "Contact",
      },
    },
    {
      path: "/test",
      name: "test",
      component: Test,
      meta: {
        title: "Test",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Paradise Beach Resort`;
  } else {
    document.title = `Paradise Beach Resort`;
  }
  next();
});

export default router;
