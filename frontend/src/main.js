import axios from "axios";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faWater,
  faWaterLadder,
  faDumbbell,
  faMartiniGlass,
  faUtensils,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faMapPin,
  faStar,
  faStarHalfAlt,
  faWifi,
  faBellConcierge,
  faSpa,
  faDice,
  faUmbrellaBeach,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faWater,
  faWaterLadder,
  faDumbbell,
  faMartiniGlass,
  faUtensils,
  faMapMarkerAlt,
  faPhoneAlt,
  faFacebookF,
  faInstagram,
  faEnvelope,
  faMapPin,
  faStar,
  faStarHalfAlt,
  faWifi,
  faBellConcierge,
  faSpa,
  faDice,
  faUmbrellaBeach,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faChevronCircleLeft,
  faChevronCircleRight
);

axios.defaults.baseURL = "http://localhost:3000/api/data/";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);

router.isReady().then(() => {
  app.mount("#app");
});
