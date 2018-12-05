import Vue from 'vue';
//I would typically keep my main layout page with routing and navigation in a module.
//For simplicity we will have a simple welcome screen.
import App from './App.vue';

import './registerServiceWorker';

// import 'vuetify/dist/vuetify.min.css';
import './config/vuetify';

new Vue({
  render: h => h(App),
}).$mount('#app');
