<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>welcome to progrramming joke generator</h1>
    <jokeButton @click="generate" />
    <normalJoke v-if="choice == 1" />
    <snakeJoke v-if="choice == 2" /> 
    <loudJoke v-if="choice == 3"/>
    <button @click="loud"> Loud joke </button>
    <button @click="normal"> normal joke </button>
    <button @click="snake"> Snake joke </button>
  </div>
</template>

<script>
import jokeButton from "./components/jokebutton";
import snakeJoke from "./components/snakeJoke";
import normalJoke from "./components/normaljoke";
import loudJoke from "./components/loudjoke";

export default {
  name: "App",
  components: {
    jokeButton,
    snakeJoke,
    normalJoke,
    loudJoke
  },
  data() {
    return {
      choice: 1
    };
  },
  methods: {
    generate: function() {
      this.$store.dispatch("getNewJoke");
    },
    snake : function(){
      this.choice=2;
    
    },
    loud : function(){
      this.choice=3;
    },
    normal : function(){
      this.choice=1;
    }
    
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-items: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
