import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Error404 from "../views/Error404.vue";
import Rooms from "../views/rooms/Rooms.vue";
import RoomDetails from "../views/rooms/RoomDetails.vue";
import Activities from "../views/Activities.vue";
import Contact from "../views/Contact.vue";
import ProductIndex from "../views/ProductIndex.vue";
import CreateProduct from "../views/CreateProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";
import Admin from "../views/admin.vue";
import TestZ from "../views/TestPage.vue";
import Login from "../views/Login.vue";

/* user */
import Users from "../views/Users.vue";
import CreateUser from "../views/CreateUser.vue";
import UpdateUser from "../views/UpdateUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "TestZ",
    component: TestZ,
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      hideNavbar: true,
      hideFooter: true,
      requiresAuth: true,
    },
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
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
    path: "/rooms/:id",
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

  /* PRODUCTS */
  {
    path: "/product-index",
    name: "ProductIndex",
    component: ProductIndex,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: CreateProduct,
  },

  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: UpdateProduct,
    props: true,
  },

  /* USER */
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
  },
  {
    path: "/add-user",
    name: "Createuser",
    component: CreateUser,
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
  },
  {
    path: "/edit-user/:id",
    name: "UpdateUser",
    component: UpdateUser,
    props: true,
    meta: {
      hideNavbar: true,
      hideFooter: true,
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

const isAuthenticated = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Paradise Beach Resort`;
  } else {
    document.title = `Paradise Beach Resort`;
  }

  /* if (to.matched.some((record) => record.meta.requiresAuth)) {
    router.push("/admin/login");
  } */
  next();
});

export default router;
