import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:12
    },
    mutations:{
        add(state){
            state.count++
        },
        addN(state,step){
              state.count+=step
        }
    },
    actions:{
        addAsync(context){
            setTimeout(()=>{
            context.commit('add')
            },1000
        )},
       addNAsync(context,step){
           setTimeout(()=>{
               context.commit('addN',step)
           },1000)

        }
    },
    getters:{
        getcount:state=>{
            return  '数量是'+state.count+''
        }
    }

})