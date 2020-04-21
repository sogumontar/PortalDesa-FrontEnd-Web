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
                   target:'http://localhost:9000/wisata/',
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
               const response = await axios.get('http://localhost:9000/wisata/')
               this.wisata =response.data
           }
        }
    }
</script>

<style scoped>

</style>