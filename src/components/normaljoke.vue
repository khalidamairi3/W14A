<template>
    <div>
        <!-- <h1> normal joke  </h1>  -->

        <h2> {{joke}} </h2>
    </div>
</template>

<script>
    export default {
        name: "normal-joke",
        computed: {
            joke() {
                return this.$store.state.joke; 
            }
        },
        
    }
</script>

<style scoped>

div{
    width: 100%;
    text-align: center;
    justify-items: center;
    align-items: center;
}
</style>