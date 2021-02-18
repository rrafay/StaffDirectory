<template>
    <!-- <div class="div">
        
        <div v-for="(names, index) in name" :key="index">
            <p><a v-bind:href="`marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></p>
            {{names.building}}
            <p><a v-bind:href="`${names.email}`">{{names.email}}</a></p>
            {{names.phoneNumber}}
        </div>

        
        
        </div>   -->
        <table style="width:100%">
  <tr>
    <th>Department</th>
    <th>Building</th>
    <th>Email</th>
    <th>Phone</th>
  </tr>
  <tr v-for="(names, index) in name" :key="index">
    <td> <h4><b> <a :href="`https://www.marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></b></h4></td>
    <td>{{names.building}}</td>
    <td> <p><a v-bind:href="`mailto:${names.email}`">{{names.email}}</a></p></td>
    <td>{{names.phoneNumber}}</td>
  </tr>
 
</table>


</template>

<script>
import Papa from "papaparse"
export default {
    name: 'Depts',
    data(){
        return{
            name:[]
        }
        
    },

    methods: {
        getNames(){
            let url = 'https://www.marywood.edu/about/directory/directory-feed.csv'
            Papa.parse(url, {
                header: true,
                download:true,
                
                complete: (results)=>{
                    
                  this.name = results.data
                }
            })
        }
     
    },

    created(){
        this.getNames()
    }
  

   
    
}
</script>

<style>

p {
   margin: 0px;
   padding: 0px;
}
h1{
    color: #1a5632;
}


</style>