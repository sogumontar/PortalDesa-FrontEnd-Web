<template>
    <div class="container">
        <h1 class="judul mt-3">Detail Produk</h1>
        <hr>
        <div>
            <b-row class="justify-content-md-center justify-content-lg-center justify-content-sm-center">
                <div class="row metric-tarif">
                    <b-col col lg="auto" md="auto" sm="8" cols="8" class="metric-tarif">
                        <b-img
                                rounded=""
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"
                                class="gambar-produk"
                                fluid>
                        </b-img>
                    </b-col>
                    <b-col col lg="auto" md="6" sm="8" cols="8" class="data-produk mt-2">
                        <p>Nama Produk : {{produk.nama}}</p>
                        <p>Harga : Rp. {{produk.harga | numFormat}}</p>
                        <p>Deskripsi : <br>{{produk.deskripsi}}</p>
                    </b-col>
                </div>
            </b-row>
<!--            <center>-->
<!--                <b-card no-body class="overflow-hidden" style="max-width: 80%;">-->
<!--                    <b-row no-gutters class="metric-tarif">-->
<!--                        <b-col md="6">-->
<!--                            <b-img-->
<!--                                    rounded=""-->
<!--                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"-->
<!--                                    fluid></b-img>-->
<!--                        </b-col>-->
<!--                        <b-col md="6">-->
<!--                            <b-card-body>-->
<!--                                <h3>{{produk.nama}}</h3>-->
<!--                                <b-card-text>-->
<!--                                    <p>Nama Produk : {{produk.nama}}</p>-->
<!--                                    <p>Harga : {{produk.harga}}</p>-->
<!--                                    <p>Deskripsi : {{produk.deskripsi}}</p>-->
<!--                                </b-card-text>-->
<!--                            </b-card-body>-->
<!--                        </b-col>-->
<!--                    </b-row>-->
<!--                </b-card>-->
<!--                <router-link :to="'/beliProduk/'+produk.sku"><b-btn class="btn btn-success">Beli</b-btn></router-link>-->
<!--                <b-btn class="btn btn-primary">Tambah Ke Keranjang</b-btn>-->
<!--            </center>-->
<!--            <br><br>-->
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "DetailProdukPage"
        ,
        data() {
            return {
                sku: this.$route.params.sku,
                produk: []
            }
        }, async mounted() {
            this.load()
        },
        methods: {
            async load() {
                console.log(this.$route.params.sku)
                const response = await axios.get('http://localhost:9000/produk/sku/' + this.$route.params.sku)
                this.produk = response.data
                console.log(this.produk)
            }
        }
    }
</script>

<style scoped>
    .judul{
        text-align: left;
        font-family: "Arial Black";
    }

    .gambar-produk{
        width: 300px;
    }

    .data-produk{
        font-size: 18px;
    }

    .metric-tarif{
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #DCE6EB;
        font-family:  "Times New Roman";
        -webkit-box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
    }
</style>