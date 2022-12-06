import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faPhone,
  faEnvelope,
  faDiagramProject,
  faBriefcase,
  faChartSimple,
  faPlane,
  faEarthEurope,
  faInbox,
  faArrowRight,
  faMedal,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(
  faClock,
  faPhone,
  faEnvelope,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faDiagramProject,
  faBriefcase,
  faChartSimple,
  faPlane,
  faEarthEurope,
  faInbox,
  faArrowRight,
  faMedal,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faLocationDot,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
