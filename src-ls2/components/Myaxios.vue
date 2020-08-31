<template>
        <div>
            <ul>
                <li v-for="item in arr" :key="item.id">
                    {{item}}
                </li>
            </ul>
            <button @click="get" >这是get请求</button>
            <button @click="post">这是post请求</button>
    </div>
        
</template>

<script>


export default {
    data(){
        return {
            arr:[]
        }
    },
   
    methods:{
           get(){
            this.$axios.get('/arr').then(res=>{
                console.log(res.data)
            })
           },
           post(){
             this.$axios.get(
             'http://localhost:4000/arr',
            {params:{
            
              
             }} 
            )
           }
    },
   
     
}
</script>

<style>

</style>