<template>
    <b-container>
        <b-row class="baris-produk justify-content-md-center justify-content-lg-center justify-content-sm-center">
            <b-col class="metric-tarif p-4 m-3 mr-5" v-for="produk in produk" :key="produk.sku" cols="10" col lg="3" sm="8" md="4">
                <router-link :to="'/detailProduk/'+produk.sku">
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
    </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ProductPerMerchant",
        data(){
            return {
                nama: this.$route.params.sku,
                produk: []

            }
        },
        async mounted(){
            this.load()
        },
        methods: {
            async load(){
                const response = await axios.get('https://portal-desa.herokuapp.com/produk/skuDesa/' + this.$route.params.sku)
                this.produk = response.data
                console.log(this.produk)
            }
        }
    }
</script>

<style scoped>

</style>