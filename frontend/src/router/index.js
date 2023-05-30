import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Error404 from "../views/Error404.vue";
import Rooms from "../views/rooms/Rooms.vue";
import RoomDetails from "../views/rooms/RoomDetails.vue";
import Activities from "../views/Activities.vue";
import Contact from "../views/Contact.vue";
import Test from "../views/Testpage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "About",
      },
    },
    {
      path: "/rooms",
      name: "Rooms",
      component: Rooms,
      meta: {
        title: "Rooms",
      },
    },

    {
      path: "/room-details/:id",
      name: "RoomDetails",
      component: RoomDetails,
      props: true,
      meta: {
        title: "Room Details",
      },
    },

    {
      path: "/activities",
      name: "Activities",
      component: Activities,
      meta: {
        title: "Activities",
      },
    },
    {
      path: "/contact",
      name: "Contact",
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

    // redirect
    {
      path: "/accommodation",
      redirect: "/rooms",
    },

    // catchall 404
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: Error404,
      meta: {
        hideNavbar: true,
        hideFooter: true,
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
