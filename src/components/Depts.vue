<template>
    <!-- 
        
        <div v-for="(names, index) in name" :key="index">
            <p><a v-bind:href="`marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></p>
            {{names.building}}
            <p><a v-bind:href="`${names.email}`">{{names.email}}</a></p>
            {{names.phoneNumber}}
        

        
        
        </div>   -->
<div class="div">
<div 
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup.prevent="searchItems()"> </div>
    <br>
    <br>
    <br>
    <br>
    

        <table class="table-content" style="max-width:120rem">
  <tr>
    <th><h2>Department</h2></th>
    <th><h2>Building</h2></th>
    <th><h2>Email</h2></th>
    <th><h2>Phone</h2></th>
    
  </tr>
 
  <tr v-for="(names, index) in name" :key="index">
    <td > <h4><b> <a :href="`https://www.marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></b></h4></td>
    <td>{{names.building}}</td>
    <td> <p><a v-bind:href="`mailto:${names.email}`">{{names.email}}</a></p></td>
    <td>{{names.phoneNumber}}</td>
  </tr>
 
</table>
</div>

</template>

<script>
import Papa from "papaparse"
export default {
    name: 'Depts',
    data(){
        return{
            name:[],
            depts:[],
            search: ''
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
                  this.depts = results.data
                  
                }
            })
        },

        searchItems(){
              if(this.search){
                      this.name = this.depts.filter(name => name.departmentName.toLowerCase().includes(this.search.toLowerCase()))
                  }
                  else{
                    this.name = this.depts
                  }
        }
     
    },

    created(){
        this.getNames()
        this.searchItems()
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
a{
    color: #27834b ;
}
.table-content{
    text-align:left;
    padding-left: 5rem;
}
th {
  border-bottom: 1px solid #e5e5e5;
}



</style>