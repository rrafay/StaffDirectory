<template>
  <div class="div" >
      
      <div 
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup.prevent="parseDoc()"> </div>
    <br>
    <br>


     <div id="dropdown" style="padding-bottom:2rem;">
        <select class="dropdown-list" v-model="selectedValue" @change="onChange($event)">
            <option value="All Departments">All Departments</option>
            <option v-for="(dept, index) in filtered" :value="dept" :key="index">{{dept}}</option>
            </select>
            <!-- <div>
            <ul style="list-style-type: none;">
            <li v-for="(names, index) in values" :key="index" id="list-items">
                <img class="images" :src="`${names.PHOTO}`"> 
                <b>Name: </b>{{names.Last_Name}} , 
             {{ names.First_Name }} 
              
            <b>Department: </b>{{names.Department}}
            <b>Office: </b>{{names.Office_Location}}
            <b>Email: </b>{{names.E_Mail}}
            <b>Title: </b>{{names.Job_Title}}
            <b>Extension: </b>{{names.Work_Phone}}
                </li>
                </ul></div> -->
            
    </div>

<br>
    <div id="hide" class="container">
    <ul v-if="info" style="list-style-type: none; 
        margin:0;
        padding:0;" id = "list-parent">
        <li v-for="(item, index) in info" :key="index" id="list-items">
            <v-lazy-image class="images" :src="`${item.pics}`" /> 
           <div class="names"> 
               <h1><b> {{ item.displayName }}</b></h1> 
               <div class="desc">
            <p>{{item.department}}</p>
            <p>{{item.title}}</p>
            <p><a v-bind:href="`${item.email}`">{{item.email}}</a></p>
           <p> <b>{{item.phone}}</b></p>
            <p>{{item.location}}</p>
            </div>
            
             </div>
             

        </li>
    </ul>
   

    </div>
 <div class="container-2" v-if="info == ''">
 
     <img :src=logo style="height: 1.8rem; width:auto; position:relative; left:0rem; top:0.5rem;"> <span>No Results Found</span> 

 </div>
  </div>
</template>

<script>

import Papa from "papaparse"
import VLazyImage from "v-lazy-image"

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
      search: '',
      isVisible: false,
      selectedValue: '',
      values:[]
    };
  },


    methods: {

onChange(event) {

if(event.target.value == this.selectedValue){
 this.info = this.info.filter(info => info.department === this.selectedValue)
 
if(this.selectedValue == "All Departments"){
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
             const newUsers = results.data.map(item => {
                    const container = {}
                    container.firstName = item.First_Name
                    container.lastName = item.Last_Name
                    container.department = item.Department
                    container.email = item.E_Mail
                    container.phone = item.Work_Phone
                    container.title = item.Job_Title
                    container.location = item.Office_Location
                    container.displayName = item.Display_Name
                    container.prefName = item.Preferred_Name
                    container.pics = item.PHOTO
                    container.newAge = container.firstName.concat(' ', container.department, ' ', container.prefName, ' ', container.email, ' ',
                    ' ', container.phone, ' ', container.location, ' ', container.title) 
                    return container
                })
            if(this.search){
                
                // console.log(results.data)
                // console.log(newUsers)
                this.info = newUsers.filter(info => info.newAge.toLowerCase().includes(this.search.toLowerCase())) 
                 

            } 
            
            
            else{
                this.info = newUsers
            }
            
        
    },
        
})

    }





    },

    // watch:{
    //     keyword(){
    //         this.parseDoc()
    //     }
    // },


    created(){
        this.parseDoc()
    },

    computed:{
        filtered(){
            return[...new Set(this.info.map(({department}) => department).sort())]
        }
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


.container-2{
    
    padding-top: 3rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    margin:0 auto;
    background-color: #e5e5e5;
    margin-left: auto;
    margin-right: auto;
    max-width:80%;  
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
    /* width: 100%; */
    margin-left: auto;
    margin-right: auto;
    max-width:80%;   
}

#list-items:nth-child(even){
    background-color: white;
}


@media screen and (max-width: 900px) {
    #list-items{
    text-align: center;
    padding-bottom: 2.5rem;
    display: block;
    padding-right: 2.5rem;
    margin-left: 0rem;
    max-width:70rem; 
}

.names{
    display: block;
   margin-left: 0.5rem;
}



}

#search-site {
    height: 1.5rem;
    background-color: #eeeeee ;
    width: 17rem;
    border-radius: 0.9rem;
    border:0;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    outline-color: gray;
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
    background-position:38.5rem;
    background-repeat: no-repeat;
    background-size: 1.1rem;
    
}




</style>