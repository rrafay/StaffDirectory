<template>
  <div class="div" >
      
      <div 
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup.prevent="parseDoc()"> </div>
    <br>
    <br>


     <div id="dropdown" style="padding-bottom:2rem;">
        <select v-model="selectedValue" @change="onChange($event)">
            <option value="All Departments">All Departments</option>
            <option v-for="(dept, index) in filtered" :value="dept" :key="index">{{dept}}</option>
            </select>
            <div>
            <ul style="list-style-type: none;">
            <li v-for="(names, index) in values" :key="index" id="list-items">
                <b>Name: </b>{{names.Last_Name}} , 
             {{ names.First_Name }} 
             <br> 
            <b>Department: </b>{{names.department}}<br>
            <b>Office: </b>{{names.Office_Location}}<br>
            <b>Email: </b>{{names.E_Mail}}<br> 
            <b>Title: </b>{{names.Job_Title}}<br>
            <b>Extension: </b>{{names.Work_Phone}}<br>
                </li>
                </ul></div>
            
    </div>

<br>
    <div id="hide" class="container">
    <ul v-if="info" style="list-style-type: none;">
        <li v-for="(item, index) in info" :key="index" id="list-items">
            <b>Name: </b> 
             {{ item.displayName }} 
             <br> 
            <b>Department: </b>{{item.department}}<br>
            <b>Office: </b>{{item.location}}<br>
            <b>Email: </b>{{item.email}}<br> 
            <b>Title: </b>{{item.title}}<br>
            <b>Extension: </b>{{item.phone}}<br>
             
             

        </li>
    </ul>
    

    </div>
 <div class="container-2" v-if="info == ''">
 <p style="font-size: 1.2rem"> Could not find anything 😥 😪</p>
 </div>
  </div>
</template>

<script>

import Papa from "papaparse"
export default {
    name: 'Staffdir',
  data() {
    return {
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
        download: true,
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

                    container.newAge = container.firstName.concat(' ', container.department, ' ', container.prefName, ' ', container.email, ' ', container.email,
                    ' ', container.phone, ' ', container.location, ' ', container.title) 
                    return container
                })
            if(this.search){
                
                //console.log(results.data)
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
@import url('http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
#app{
    font-family: 'PT Sans', sans-serif;
}

.container-2{
    
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    margin:0 auto;
    width: 70rem;
    background-color: #e5e5e5;
    text-align: left;
}

.container{
    
    /* padding-top: 2rem; */
    margin:0 auto;
    width: 70rem;
    background-color: #e5e5e5;
}
#list-items{
    text-align: left;
    padding-bottom: 2.5rem;
}

#search-site {
    height: 1.5rem;
    background-color: #eeeeee ;
    width: 40rem;
    border-radius: 0.9rem;
    border:0;
}

input[type=text]{
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==');
    background-position:38.5rem;
    background-repeat: no-repeat;
    background-size: 1.1rem;
    
}




</style>