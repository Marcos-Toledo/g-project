<template>
  <div class="panel">
    <div class="panel-top">{{ title }}</div>
    
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.panel {
  color: #000;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.panel-top {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-radius: 4px 4px 0 0;
  background-color: #fafafa;
}

.panel-body {
  padding: 20px 10px;
}
</style>

