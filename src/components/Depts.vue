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
    <td> <h4><b> <a v-bind:href="`marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></b></h4></td>
    <td>{{names.building}}</td>
    <td> <p><a v-bind:href="`${names.email}`">{{names.email}}</a></p></td>
    <td>{{names.phoneNumber}}</td>
  </tr>
 
</table>


    <!-- <div class="container">
    <ul style="list-style-type: none; 
        margin:0;
        padding:0;" id = "list-parent">
        <li  v-for="(names, index) in name" :key="index" id="list-items">
            
           <div class="names"> 
               <h1><b> <a v-bind:href="`marywood.edu${names.deptUrl}`"> {{names.departmentName}}</a></b></h1> 
               <div class="desc">
           <p> {{names.building}}</p>
            <p><a v-bind:href="`${names.email}`">{{names.email}}</a></p>
          <p><b>  {{names.phoneNumber}}</b></p>
            </div>
            
             </div>
             

        </li>
    </ul>
   

    </div> -->





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
            let url = 'http://www.marywood.edu/about/directory/directory-feed.csv'
            Papa.parse(url, {
                header: true,
                download:true,
                
                complete: (results)=>{
                    console.log(results.data)
                  this.name = results.data
                }
            })
        }
        // getNames(){
        //     fetch('http://www.marywood.edu/api/content/render/false/type/json/query/+contentType:departmentOffice%20+(conhost:25ef3264-9f7c-490d-8a2a-b15ca5eec4d6%20conhost:SYSTEM_HOST)%20+languageId:1%20+deleted:false%20+working:true/orderby/departmentOffice.departmentName')
        //       .then(response => response.json())
        //       .then(data => console.log(data))
        // }
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