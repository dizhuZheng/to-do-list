import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },

    // getters: {
    //     finished: state =>{
    //         return messages
    //     }
    // },

    mutations:{
        increment: state => state.count++,
        decrement: state => state.count--
    }

    // actions: {
    //     async
    // }
});
