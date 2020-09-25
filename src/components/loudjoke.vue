<template>
    <div>
        <h1> loud joke  </h1> 

        <h2> {{joke}} </h2>

    </div>
</template>

<script>
    export default {
        name:"loud-joke",
        computed: {
            joke() {
                return this.$store.getters.loudJoke; 
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