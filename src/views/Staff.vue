<template>
  <div class="home">
    <h1 class="heading">Directory</h1>
    

    <Staffdir />
  </div>
  
</template>

<script>
// @ is an alias to /src

import Staffdir from '../components/Staffdir.vue'
export default {
  name: 'Staff',
  components: {
    Staffdir
  }
}
</script>

<style>
.heading{
  text-align: center;
  color:#1a5632;
}
hr.line{
  border-top: 1px solid #e5e5e5;;
}
</style>