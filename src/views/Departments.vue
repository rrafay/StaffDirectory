<template>
    <div class="home">
    <h1 class="heading">Departments</h1>
    
<br>
    <Depts />
    </div>
</template>

<script>
import Depts from '../components/Depts'
export default {
    name:'Departments',
    components:{
        Depts
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