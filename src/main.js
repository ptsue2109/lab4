import Vue from 'vue'
import App from './App.vue'
import "@/assets/style.scss";

Vue.config.productionTip = false
export const eventBus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
