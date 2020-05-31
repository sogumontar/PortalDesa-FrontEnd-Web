<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
<!--            <b-navbar-brand href="#">{{ nama }}</b-navbar-brand>-->

            <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>

            <b-collapse id="nav-collapse2" is-nav>
                <b-navbar-nav class="">
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Artikel</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Berita</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Produk</b-link></b-nav-item>
                    <b-nav-item class="mr-3"><b-link to="/" style="color: white">Penginapan</b-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container>
            <h1 class="judul mt-3">{{ nama }}</h1>
            <hr>
            <b-row class="justify-content-lg-center">
                <b-col v-for="desa in desas" v-bind:key="desa.nama">
                    <b-img :src="desa.foto " width="400px"></b-img>
                </b-col>
            </b-row>
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
                desas: [{
                    "nama" : this.nama,
                    "foto" : 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg'
                }],

            }
        },
        async mounted(){
            this.load()
        },
        methods: {
            async load(){
                const response = await axios.get('https://portal-desa.herokuapp.com/desa/' + this.$route.params.sku)
                this.desa = response.data
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