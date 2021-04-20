<template>
    
<div class="div" style="min-height: 100vh">
<div 
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup.prevent="searchItems()"> </div>
    <br>
    <br>
    <br>
    <br>
    

        <table class="table-content" style="max-width:120rem; margin:auto">
  <tr>
    <th style="width:40rem;"><h2>Department & Location</h2></th>
    
    <th style="width:20rem;"><h2>Email</h2></th>
    <th style="width:20rem;"><h2>Phone</h2></th>
    
  </tr>
 
  <tr v-for="(names, index) in name" :key="index">
    <td style="width:40rem;"> <h4><b> <a :href="`https://www.marywood.edu${names.deptUrl}`" target="_blank"> {{names.depts}}</a> |</b>{{names.building}}</h4></td>
    <td style="width:20rem;"> <p><a v-bind:href="`mailto:${names.email}`">{{names.email}}</a></p></td>
    <td style="width:20rem;">{{names.phone}}</td>
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
                  const myObjects = results.data.map(item => {
                    const container = {}
                    container.depts = item.departmentName
                    container.email = item.email
                    container.building = item.building
                    container.phone = item.phoneNumber
                    container.deptUrl = item.deptUrl
                    container.newValues = container.depts.concat(' ', container.email) 
                    return container
                })
                this.name = myObjects
                this.depts = myObjects
                  
                }
            })
        },

        searchItems(){
              if(this.search){
                      this.name = this.depts.filter(name => name.newValues.toLowerCase().includes(this.search.toLowerCase()))
                      
                         if(this.search == "marywood"){
                      this.name = this.depts.filter(name => name.depts.toLowerCase().includes(this.search.toLowerCase()))
                      
                  }

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