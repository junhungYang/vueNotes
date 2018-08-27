<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <myCom/>
    <com/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import myCom from './components/myCom'
import com from './components/com'
export default {
  name: 'App',
  components: {
    HelloWorld,
    myCom,
    com
  }
}
</script>

<style scoped>
.content {
  color: red;
}
</style>
