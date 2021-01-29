<template>
  <div class="div" >
      
      <div v-on:keyup="isVisible=true"
           v-on:keyup.delete="isVisible=false"
           v-on:keyup.enter="isVisible=false"
           v-on:keyup.tab="isVisible=false"
           v-on:keyup.esc="isVisible=false"
           v-on:keyup.space="isVisible=false"
           v-on:keyup.up="isVisible=false"
           v-on:keyup.down="isVisible=false"
           v-on:keyup.left="isVisible=false"
           v-on:keyup.right="isVisible=false"
        class="control">
    <input type="text" id="search-site" v-model.trim="search" placeholder=" Search" @keyup="parseDoc"> </div>
    <br>
    <br>

    <!-- <div id="dropdown">
        <select v-model="selectedValue">
            <option disabled value="">Departments</option>
            <option v-for="(Dept, index) in filtered" :value="Dept" :key="index">{{Dept}}</option>
            </select>
            
    </div> -->

    <!-- <div id="dropdown">
        <select v-model="selectedValue" @change="onChange($event)">
            <option disabled value="">Departments</option>
            <option v-for="(Dept, index) in filtered" :value="Dept" :key="index">{{Dept}}</option>
            </select>
            <span>{{selectedValue}}</span>
            
    </div> -->

     <div id="dropdown" style="padding-bottom:2rem;">
        <select v-model="selectedValue" @change="onChange($event)">
            <option value="">ALL</option>
            <option v-for="(Dept, index) in filtered" :value="Dept" :key="index">{{Dept}}</option>
            </select>
            <div class="container">
            <ul style="list-style-type: none;">
            <li v-for="(names, index) in values" :key="index" id="list-items">
                <b>Name: </b>{{names.Last_Name}} , 
             {{ names.First_Name }} 
             <br> 
            <b>Department: </b>{{names.Department}}<br>
            <b>Office: </b>{{names.Office_Location}}<br>
            <b>Email: </b>{{names.E_Mail}}<br> 
            <b>Title: </b>{{names.Job_Title}}<br>
            <b>Extension: </b>{{names.Work_Phone}}<br>
                </li>
                </ul></div>
            
    </div>

<br>
    <div v-if="isVisible" id="hide" class="container">
    <ul v-if="info" style="list-style-type: none;">
        <li v-for="(item, index) in info" :key="index" id="list-items">
            <b>Name: </b>{{item.Last_Name}} , 
             {{ item.First_Name }} 
             <br> 
            <b>Department: </b>{{item.Department}}<br>
            <b>Office: </b>{{item.Office_Location}}<br>
            <b>Email: </b>{{item.E_Mail}}<br> 
            <b>Title: </b>{{item.Job_Title}}<br>
            <b>Extension: </b>{{item.Work_Phone}}<br>
             
             

        </li>
    </ul>
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
 this.values = this.info.filter(info => info.Department === this.selectedValue)
if(this.selectedValue == ""){
    this.values = ""
}
}
// if(event.target.value == this.selectedValue){
//     console.log("Hi")
// }
     

        
              
}
,
     parseDoc(){
            let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJcy5_CZ5q_ozBQ7Aut6enMp92BoH-AuBTPDtblhE1NViYXMxFAfxW2rXzTs6u9_YhPOOeGv0XXfa8/pub?output=csv"
        Papa.parse(url, {
        header: true,
        download: true,
        complete: (results) => {
            
            // console.log('Row: ', results.data)
            if(this.search){
                this.info = results.data.filter(info => info.Preferred_Name.toLowerCase().includes(this.search.toLowerCase())
                )

            } 
            else{
                this.info = results.data
            }
        
    },
        
})

    }





    },


    created(){
        this.parseDoc()
    },

    computed:{
        filtered(){
            return[...new Set(this.info.map(({Department}) => Department).sort())]
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