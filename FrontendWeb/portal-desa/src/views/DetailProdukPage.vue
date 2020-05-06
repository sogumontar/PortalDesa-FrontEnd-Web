<template>
    <div class="container">
        <h3>Detail Produk</h3>
        <hr>
        <div>
            <center>
                <b-card no-body class="overflow-hidden" style="max-width: 80%;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" width="100px" alt="Image"
                                        class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                                <h3>{{produk.nama}}</h3>
                                <b-card-text>
                                    <p>Nama Produk : {{produk.nama}}</p>
                                    <p>Harga : {{produk.harga}}</p>
                                    <p>Deskripsi : {{produk.deskripsi}}</p>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
                <router-link :to="'/beliProduk/'+produk.sku"><b-btn class="btn btn-success">Beli</b-btn></router-link>
                <b-btn class="btn btn-primary">Tambah Ke Keranjang</b-btn>
            </center>
            <br><br>
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

</style>