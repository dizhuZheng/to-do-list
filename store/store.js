import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
       todos: []
    },

    getters: {
        doneTodos: state => {
            return state.todos
        }
    },
    mutations: {
        add (state, obj){
            state.todos.push(obj)
        }
    }
});
