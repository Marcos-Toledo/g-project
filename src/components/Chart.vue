<template>
  <highcharts :options="options"></highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  props: ['options'],

  data() {
    return {
      
    }
  },

  watch: {
    title(newValue) {
      if (newValue === '') {
        this.chartOptions.title.text = 'Entire title'
      } else {
      	this.chartOptions.title.text = newValue
      }
    }
  }
}
</script>

<style>

</style>
 
