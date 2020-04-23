<template>
    <div>
        <h1>Data Produk : </h1>
        <router-link to="/createProduk"><button class="btn btn-primary">Create produk</button></router-link>
        <b-row class="">
            <li v-for="produk in produk" :key="produk.sku">
                {{produk.nama}}
                <b-col cols="12" col lg="4" sm="12" md="6" class="p-4">
                    <h5>{{produk.nama}}</h5>
                    <p>{{produk.harga}}</p>
                    <p>{{produk.deskripsi}}</p>
                    <p>{{produk.namaDesa}}</p>
                    <b-img rounded=""
                           src="assets/kec.jpg"
                           fluid></b-img>
                </b-col>
            </li>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        devServer: {
            proxy: {
                '^/api/': {
                    target: 'http://localhost:9000/produk/',
                    changeOrigin: true
                }
            }
        },
        data() {
            return {
                produk: []
            }
        },
        async mounted() {
            this.load()
        },
        methods: {
            async load() {
                if(localStorage.getItem('token')){
                    console.log("ada")
                }else{
                    alert("Anda Belum login")
                    this.$router.push({name: 'Login'})
                }
                const response = await axios.get('http://localhost:9000/produk/')
                this.produk = response.data
            }
        }
    }
</script>

<style scoped>

</style>