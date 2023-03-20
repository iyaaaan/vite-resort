import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/fonts.css";

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
  faMapPin
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
