<template>
    <div>
        <h1>Data Produk : </h1>
        <router-link v-if="role=='ROLE_MERCHANT'"  to=""><b-btn @click="check" class="btn btn-primary">Create produk</b-btn></router-link>
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
                produk: [],
                role:''
            }
        },
        async mounted() {
            this.load()
        },
        methods: {
            async load() {
                if(localStorage.getItem('token')){
                    this.role=localStorage.getItem("role")
                }else{
                    alert("Anda Belum login")
                    this.$router.push({name: 'Login'})
                }
                const response = await axios.get('http://localhost:9000/produk/')
                this.produk = response.data
            },
            check(){
                const response = axios.get('http://localhost:9000/produk/')
                if(response.data){
                    this.$router.push({name: 'createProduk'})
                }else{
                    alert("anda harus mengisi detail data desa terlebih dahulu")
                    this.$router.push({path: '/login'})
                }
            }
        }
    }
</script>

<style scoped>

</style>