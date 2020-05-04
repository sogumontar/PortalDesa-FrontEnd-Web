<template>
    <div>
        <p>Ini Daftar Desa di Kecamatan {{value}}</p>
        <div v-for="produk in produk" :key="produk.sku">
            <p>{{produk.sku}}</p>
            {{produk.nama}}
            <b-col cols="12" col lg="4" sm="12" md="6" class="p-4">
                <h5>{{produk.nama}}</h5>
                <p>{{produk.namaKepalaDesa}}</p>
                <p>{{produk.kecamatan}}</p>
                <p>{{produk.gambar}}</p>
                <b-img rounded=""
                       src="assets/kec.jpg"
                       fluid></b-img>
            </b-col>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "DetailProdukPage",
        data() {
            return {
                value: this.$route.params.sku,
                produk : []
            }
        }, devServer: {
            proxy: {
                '^/api/': {
                    target: "http://localhost:9000/desa/+'this.$route.params.sku'",
                    changeOrigin: true
                }
            }
        }, async mounted() {
            this.load()
        },
        methods: {
            async load() {
                const response = await axios.get('http://localhost:9000/desa/kecamatan/'+this.$route.params.sku)
                this.produk = response.data
            }
        }
    }
</script>

<style scoped>

</style>