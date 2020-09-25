<template>
    <div>
        <h1> Snake joke  </h1> 

        <h2> {{joke}} </h2>



    </div>
</template>

<script>
    export default {
        name: "snake-joke",

        computed: {
            joke() {
                return this.$store.getters.snakeJoke; 
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