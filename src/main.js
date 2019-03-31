import Vue from 'vue'
import App from './App.vue'
import GridBootstrap from 'bootstrap-4-grid'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import stockInit from 'highcharts/modules/stock'

exportingInit(Highcharts)
stockInit(Highcharts)

Vue.use(GridBootstrap)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
