<template>
  <div class="div" style="min-height:100vh">
      
      <div 
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup="searchItems()">
    
    
        <select class="dropdown-list" v-model="selectedValue" @change="onChange($event)">
            <option value="">All Departments</option>
            <option v-for="(dept, index) in filtered" :value="dept" :key="index">{{dept}}</option>
            </select>
            
    
     </div>
    <br>
    <br>


<br>
    <div id="hide" class="container">
    <ul v-if="info" style="list-style-type: none; 
        margin:0;
        padding:0;" id = "list-parent">
        <li v-for="(item, index) in info" :key="index" id="list-items">
            <v-lazy-image v-if="communication" class="images" :src="`${item.pics}`" /> 
           <div class="names"> 
               <h1><b> {{ item.displayName }}</b></h1> 
               <div class="desc">
            <p>{{item.department}}</p>
            <p>{{item.title}}</p>
            <p><a v-bind:href="`mailto:${item.email}`">{{item.email}}</a></p>
           <p v-if="!noNamesList.includes(item.prefName)"> <b>{{item.phone}}</b></p>
            <p>{{item.location}}</p>
            </div>
            
             </div>
             

        </li>
    </ul>
   

    </div>
 <div class="container-2" v-if="info == search">
     
 </div>
 <div v-if="info == 0">
     
     <img :src=logo style="height: 1.8rem; width:auto; position:relative; left:0rem; top:0.5rem;"> <span>No Results Found</span> 
</div>
  </div>
</template>

<script>

import Papa from "papaparse"
import VLazyImage from "v-lazy-image"
import axios from "axios"

export default {
    name: 'Staffdir',
    components:{
        VLazyImage
    },
  data() {
    return {
      VLazyImage,
      logo: require('@/assets/musearch.svg'),
      info: [],
      depts:[],
      search: '',
      isVisible: false,
      selectedValue: '',
      values:[],
      communication : '',
      noNamesList:[
          'Mark Pitely',
      'Abdul Rafay Mudassar'
      ]
    };
  },


    methods: {

onChange(event) {

if(event.target.value == this.selectedValue){
 this.info = this.info.filter(info => info.department === this.selectedValue)
 
if(this.selectedValue == ""){
    this.parseDoc()
}

}


        
              
}

,
     parseDoc(){
            let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJcy5_CZ5q_ozBQ7Aut6enMp92BoH-AuBTPDtblhE1NViYXMxFAfxW2rXzTs6u9_YhPOOeGv0XXfa8/pub?output=csv"
        Papa.parse(url, {
        header: true,
        download:true,
        complete: (results) => {
             const myObjects = results.data.map(item => {
                    const container = {}
                    container.firstName = item.First_Name
                    container.lastName = item.Last_Name
                    container.department = item.Department
                    container.email = item.E_Mail
                    container.emailDecoy = item.E_Mail.slice(0, item.E_Mail.indexOf("@"))
                    container.phone = item.Work_Phone
                    container.title = item.Job_Title
                    container.location = item.Office_Location
                    container.locDecoy = item.Office_Location.split("Marywood").pop()
                    container.displayName = item.Display_Name
                    container.prefName = item.Preferred_Name
                    container.pics = item.PHOTO
                    container.newAge = container.firstName.concat(' ', container.department, ' ', container.prefName, ' ',
                    ' ', container.phone, ' ', container.locDecoy, ' ', container.title, ' ', container.emailDecoy) 
                    return container
                })
    this.info = myObjects
  this.depts = myObjects

            
        
    },
        
})

    },
    searchItems(){
          if(this.search){

                this.info = this.depts.filter(info => info.newAge.toLowerCase().includes(this.search.toLowerCase())) 
                 

            } 
            else{
                this.info = this.depts
            }
    }





    },

 

   


    created(){
        this.parseDoc()
        this.searchItems()
       axios.get('https://vpncheater.marywood.edu/services/access-test.php').then(response => {
           if(response.data == 1){
               this.communication = true
           }

        })

    },

    computed:{
        filtered(){
            return[...new Set(this.info.map(({department}) => department).sort())]
        },

      
    }
};




</script>

<style>

p {
   margin: 0px;
   padding: 0px;
}
h1{
    color: #1a5632;
}

.container-2 {
  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #1a5632; 
  border-radius: 50%;
  margin:0 auto;
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  margin-right: auto;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.names{
    display: flex; 
    flex-direction: column;
    
    margin-left: 20rem; 
     
     
}

.images{
    width: 15rem;
    height: auto;
    
   
}

.dropdown-list{
    border: 2px solid #1a5632;
    border-radius: 0.9rem;
    width: 17rem;
}
.dropdown-list:active, .dropdown-list:focus{
    outline: none;
    border: 2px solid #f5a800;
}

#list-parent{
    margin: 0px;
   padding: 0px;
}
#list-items{
    text-align: left;
    margin-top: 1.5rem;
    display: flex;
    background-color: #e5e5e5;
    margin-left: auto;
    margin-right: auto;
    max-width:80%;   
}

#list-items:nth-child(even){
    background-color: white;
    
}



@media screen and (max-width: 950px) {
    #list-items{
    text-align: center;
    padding-bottom: 2.5rem;
    margin-top: none;
    display: block;
    padding-right: 2.5rem;
    margin-left: 0rem;
    max-width:70rem; 
}

.images:nth-child(odd){
margin-top: 2rem;
}
.names{
    display: block;
   margin-left: 0.5rem;
}

#search-site{
    max-width: 20rem;
    margin-bottom: 1rem;
}


}

#search-site {
    height: 1.5rem;
    background-color: #eeeeee ;
    width: 20rem;
    border-radius: 0.9rem;
    border:0;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    outline-color: gray;
    margin-right: 1rem;
}

#search-site:hover{
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
#search-site:active, #search-site:focus{
    outline: none;
    border: none;
}

input[type=text]{
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==');
    background-position:18.8rem;
    background-repeat: no-repeat;
    background-size: 1.1rem;
    
}




</style>