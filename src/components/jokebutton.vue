<template>
  <div  id="generate">
    <button @click="generate"> generate</button>
  </div>
</template>

<script>
export default {
  name: "joke-button",
  methods: {
    generate: function() {
      this.$store.dispatch("getNewJoke");
    }
  }
};
</script>

<style scoped>
#generate {
  text-align: center;
  justify-items: center;
  align-items: center;

}
</style>