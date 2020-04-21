<template>
    <div>
        <h1>Data Produk : </h1>
        <b-row class="">
            <li v-for="produk in produk" :key="produk.sku">
                {{produk.nama}}
                <b-col cols="12" col lg="4" sm="12" md="6" class="p-4">
                    <h5>{{produk.nama}}</h5>
                    <p>{{produk.harga}}</p>
                    <p>{{produk.deskripsi}}</p>
                    <p>{{produk.namaDesa}}</p>
                    <b-img rounded=""
                           src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"
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
                const response = await axios.get('http://localhost:9000/produk/')
                this.produk = response.data
            }
        }
    }
</script>

<style scoped>

</style>