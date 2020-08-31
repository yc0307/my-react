<template>
<div>
 {{$store.state.count}}
 {{$store.getters.getcount}}
 <button @click="fn">加一</button>
 <button @click="fn1(3)">加3</button>
<button @click="addAsync">自增1+async</button>
<button @click="addNAsync(2)">自增N+async</button>

</div>
</template>

<script>
export default {
    mounted(){
       console.log(this.$store.state.count)
    },
    methods:{
        fn(){
           this.$store.commit('add')
        },
        fn1(n){
           this.$store.commit('addN',n)
        },
        addAsync(){
            this.$store.dispatch('addAsync')
        },
        addNAsync(n){
            this.$store.dispatch('addNAsync',n)
        }
    }
}
</script>

<style>

</style>