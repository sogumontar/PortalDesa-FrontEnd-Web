<template>
    <div>
        <h4>Ini Daftar Desa di Kecamatan {{value}}</h4>
        <hr>
        <div class="container" v-for="produk in produk" :key="produk.sku">
            <b-card >
                <h3>{{produk.nama}}</h3>
                <div class="row">
                    <div class="col-md-7">
                        <b-card-text>
                            Nama Kepala Desa : {{produk.namaKepalaDesa}}
                        </b-card-text>
                    </div>
                    <div class="col-md-5">
                        <b-img width="180px" rounded=""
                               src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"
                               fluid></b-img>
                    </div>
                </div>

                <b-card-text>A second paragraph of text in the card.</b-card-text>
                <router-link  class="card-link" :to="'/detailDesaAdmin/'+produk.nama"><h5>Lihat detail desa</h5></router-link>

            </b-card>
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
                console.log(this.produk)
            }
        }
    }
</script>

<style scoped>

</style>