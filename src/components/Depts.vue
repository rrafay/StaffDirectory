<template>
    <div class="div">
        
        <!-- <p v-for="(n, index) in name" :key="index">
            {{n.Department}}
        </p> -->

        <p v-for="(Department,index) in filtered" :key="index">
            {{Department}}

        </p>
        
        </div>    
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
            let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJcy5_CZ5q_ozBQ7Aut6enMp92BoH-AuBTPDtblhE1NViYXMxFAfxW2rXzTs6u9_YhPOOeGv0XXfa8/pub?gid=0&single=true&output=csv'
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
    },

    computed:{
        filtered(){
            return[...new Set(this.name.map(({Department}) => Department))]
        }
    }
    
}
</script>

<style>

</style>