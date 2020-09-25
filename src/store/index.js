import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke : ""
  },
  mutations: {
    updateJoke : function(state,joke){
      state.joke = joke;
    }
  },
  actions: {
    getNewJoke : function(context){

      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        method : "get"
      }).then((response)=>{
        context.commit("updateJoke",response.data.joke)
      }).catch((err)=>{
        console.log(err);
      })
    }

  },
  getters:{
    loudJoke : function(state){
      return state.joke.toUpperCase();
    },
    snakeJoke: function(state){
      return state.joke.split(" ").join("_");
    }
  },
  modules: {}
});
