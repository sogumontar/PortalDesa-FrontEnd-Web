<template>
    <b-container>
        <div v-if="penginapan.length!=0">
            <b-row class="baris-produk justify-content-md-center justify-content-lg-center justify-content-sm-center">
                <b-col class="metric-tarif p-4 m-3 mr-5" v-for="penginapan in penginapan" :key="penginapan.sku"
                       cols="10" col lg="3" sm="8" md="4">
                    <router-link :to="'/detailPenginapan/'+produk.sku">
                        <b-img
                                rounded=""
                                :src="'https://portal-desa.herokuapp.com'+produk.gambar"
                                fluid
                                class="gambar-produk"></b-img>
                    </router-link>
                    <hr>
                    <h5>Nama: {{ produk.nama }}</h5>
                    <h5>Harga: Rp. {{ produk.harga | numFormat }}</h5>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <h1>Penginapan Di Desa ini Tidak Ditemukan</h1>
        </div>
    </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "PenginapanPerMerchant",
        data() {
            return {
                nama: this.$route.params.sku,
                penginapan: []

            }
        },
        async mounted() {
            this.load()
        },
        methods: {
            async load() {
                const response = await axios.get('https://portal-desa.herokuapp.com/penginapan/bySkuAdmin/' + this.$route.params.sku)
                this.penginapan = response.data
                console.log(this.penginapan)
            }
        }
    }
</script>

<style scoped>

</style>