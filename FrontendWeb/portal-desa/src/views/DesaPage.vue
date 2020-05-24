<template>
    <div>
        <h1>This is Desa</h1>
        <ul>
            <li v-for="wisata in wisata" :key="wisata.name">
                data harga dari database adalah :{{wisata.price}}
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
       devServer: {
           proxy:{
               '^/api/':{
                   target:'https://portal-desa.herokuapp.com/wisata/',
                   changeOrigin: true
               }
           }
       },
       data(){
           return {
               wisata: []
           }

       },
        async mounted(){
            this.load()
        },
        methods:{
           async load(){
               const response = await axios.get('https://portal-desa.herokuapp.com/wisata/')
               this.wisata =response.data
           }
        }
    }
</script>

<style scoped>

</style>