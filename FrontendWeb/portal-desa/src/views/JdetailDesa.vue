<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
<!--            <b-navbar-brand href="#">{{ nama }}</b-navbar-brand>-->

            <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>

            <b-collapse id="nav-collapse2" is-nav>
                <b-navbar-nav class="">
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Artikel</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Berita</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link :to="'/productPerMerchant/'+desa.skuAdmin" style="color: white">Produk</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link :to="'/penginapanPerMerchant/'+desa.skuAdmin" style="color: white">Penginapan</b-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container>
            <h1 class="judul mt-3">{{ desa.nama }}</h1>
            <hr>
            <b-row class="justify-content-lg-center">
                <b-col >
<!--                    <b-img :src="'https://portal-desa.herokuapp.com/desa/get/'+desa.gambar " width="400px"></b-img>-->
                    <b-img :src="'https://portal-desa.herokuapp.com/desa/get/Default.jpg'" width="400px"></b-img>
                </b-col>
            </b-row>
            <p v-if="desa.namaKepalaDesa === null">Nama Kepala Desa : - </p>
            <p v-else>Nama Kepala Desa : {{desa.namaKepalaDesa}}</p>
            <p>Kecamatan : {{desa.kecamatan}}</p>
            <p>Jumlah penduduk : {{desa.jumlahPenduduk}}</p>
        </b-container>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "JdetailDesa",
        data(){
            return {
                nama: this.$route.params.sku,
                desa: []

            }
        },
        async mounted(){
            this.load()
        },
        methods: {
            async load(){
                const response = await axios.get('https://portal-desa.herokuapp.com/desa/' + this.$route.params.sku)
                this.desa = response.data
                console.log(this.desa)
            }
        }
    }
</script>

<style scoped>
    .judul{
        text-align: left;
        font-family: "Arial Black";
    }
</style>