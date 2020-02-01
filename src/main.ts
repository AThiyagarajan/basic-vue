import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueLogger from 'vuejs-logger';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);

Vue.$log.error('Sample error message');
