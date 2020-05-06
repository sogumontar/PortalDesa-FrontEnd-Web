<template>
    <div>
        <div class="container">
            <h3>Form Pemesanan</h3>
            <hr>
            <div class="mt-4">
                <b-card class="row">
                    <b-card-text class="col-md-5">
                        <p>Alamat : {{detail.alamat}}</p>
                        <b-btn v-if="detail.length!=0"  @click="show" class="btn btn-info">Ubah</b-btn>
                        <b-btn v-else class="btn btn-info" @click="show">isi</b-btn>
                    </b-card-text>
                    <b-card-text class="col-md-5">
                        <p>Total Pembayaran : Rp.{{produk.harga}} </p>
                        <!--                        <b-btn v-if="produk.length!=1" class="btn btn-info">Ubah</b-btn>-->
                    </b-card-text>
                    <b-card-text class="col-md-5">
                        <p>Metode Pembayaran : </p>
                        <select class="form-control" v-model="metode">
                            <option value="COD">COD</option>
                            <option value="ATM">ATM</option>
                            <option value="Indomaret">Indomaret</option>
                        </select>
                    </b-card-text>
                    <b-btn variant="success" @click="submit">Selesai</b-btn>
                </b-card>
                <modal name="hello-world">
                    <b-form @submit="formSubmit" class="mt-3" >
                        <b-form-row class="justify-content-sm-center mt-3">
                            <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                                <p>Alamat</p>
                            </b-col>
                            <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                                <p>:</p>
                            </b-col>
                            <b-col cols="8" col md="5" lg="4" sm="7">
                                <b-form-input
                                        id="input-alamat"
                                        v-model="detail.alamat"
                                        required
                                        type="text"
                                ></b-form-input>
                            </b-col>
                        </b-form-row>
                        <b-form-row class="justify-content-md-center">
                            <b-col col md="4" lg="2">

                            </b-col>
                            <b-col col md="auto" lg="auto">

                            </b-col>
                            <b-col col md="auto" lg="auto" class="mt-2">
                                <button type="submit" id="tombol-daftar" class="pl-3 pr-3 btn btn-primary">Update</button>
                            </b-col>
                        </b-form-row>
                    </b-form>
                </modal>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "FormBeliProduk",
        data() {
            return {
                total: 0,
                produk: [],
                detail : [],
                sku : '',
                metode : ''
            }
        }, async mounted() {
            this.sku=localStorage.getItem('sku')
            this.load()
        },
        methods: {
            async load() {
                console.log(this.$route.params.sku)
                const response = await axios.get('http://localhost:9000/produk/sku/' + this.$route.params.sku)
                this.produk = response.data
                const  responses = await axios.get('http://localhost:9000/customer/' + localStorage.getItem('sku'))
                this.detail=responses.data
                console.log(this.detail)
            },
            show () {
                this.$modal.show('hello-world');
            },
            hide () {
                this.$modal.hide('hello-world');
            },
            formSubmit(){
                if(this.detail.length!=0) {

                    axios.put('http://localhost:9000/customer/update/sku' + this.sku, {
                        sku: this.sku,
                        alamat: this.detail.alamat
                    })
                        // eslint-disable-next-line no-unused-vars
                        .then(
                            this.$router.go('detailDesa')
                        )
                }else{
                    axios.put('http://localhost:9000/customer/add', {
                        sku: this.sku,
                        alamat: this.detail.alamat
                    })
                        // eslint-disable-next-line no-unused-vars
                        .then(
                            this.$router.go('detailDesa')
                        )
                }
            },
            submit(){
                console.log()
                axios.post('http://localhost:9000/transaksi/add', {
                    skuProduk: this.$route.params.sku,
                    skuCustomer: this.sku,
                    alamat : this.detail.alamat,
                    harga : this.produk.harga,
                    metode : this.metode
                })
                    // eslint-disable-next-line no-unused-vars
                    .then(
                        window.location.href="/daftarPesanan"
                    )
            }
        }
    }
</script>

<style scoped>

</style>