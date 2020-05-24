<template>
    <div>
        <div class="container">
            <h1 class="judul mt-3">Keranjang</h1>
            <div class="row">
                <div v-for="keranjang in keranjang" :key="keranjang.id">
                    <h2>{{keranjang.idProduk}}</h2>
                    <br><br><br>
                </div>
            </div>
            <hr>
            <div class="mt-4 p-3 ml-2">
                <b-row>
                    <b-col cols="auto" col lg="auto" md="auto"  sm="auto">
                        <h5>Alamat : <input type="text" class="form-control" v-if="detail.length!=0" v-model="detail.alamat"></h5>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-button v-if="detail.length!=0" variant="primary" @click="ubah">Ubah Alamat</b-button>
                        <b-button v-else variant="primary" @click="tambahAlamat" size="sm">Tambah Alamat</b-button>
                    </b-col>
                </b-row>

                <b-row class="mt-4">
                    <b-col cols="auto" col lg="auto" md="auto"  sm="auto">
                        <h5>Total Pembayaran : Rp. {{ produk.harga*jumlah | numFormat }}</h5>
                        <b-button variant="primary" @click="show" size="sm">Detail</b-button>
                    </b-col>
                </b-row>
                <!--                <b-card class="row">-->
                <!--                    <b-card-text class="col-md-5">-->
                <!--                        <p>Alamat : {{detail.alamat}}</p>-->
                <!--                        <b-btn v-if="detail.length!=0"  @click="show" class="btn btn-info">Ubah</b-btn>-->
                <!--                        <b-btn v-else class="btn btn-info" @click="show">isi</b-btn>-->
                <!--                    </b-card-text>-->
                <!--                    <b-card-text class="col-md-5">-->
                <!--                        <p>Total Pembayaran : Rp.{{produk.harga | numFormat}} </p>-->
                <!--                        &lt;!&ndash;                        <b-btn v-if="produk.length!=1" class="btn btn-info">Ubah</b-btn>&ndash;&gt;-->
                <!--                    </b-card-text>-->
                <!--                    <b-card-text class="col-md-5">-->
                <!--                        <p>Metode Pembayaran : </p>-->
                <!--                        <select class="form-control" v-model="metode">-->
                <!--                            <option value="COD">COD</option>-->
                <!--                            <option value="ATM">ATM</option>-->
                <!--                            <option value="Indomaret">Indomaret</option>-->
                <!--                        </select>-->
                <!--                    </b-card-text>-->
                <!--                    <b-btn variant="success" @click="submit">Selesai</b-btn>-->
                <!--                </b-card>-->
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
        name: "KeranjangPage",
        data() {
            return {
                total: 0,
                produk: [],
                detail : [],
                sku : '',
                metode : '',
                jumlah: 0,
                keranjang:[],
            }
        }, async mounted() {
            this.sku=localStorage.getItem('sku')
            this.load()
            this.getKeranjang()
            const queryString = window.location.search;

            const urlParams = new URLSearchParams(queryString);

            const page_type = urlParams.get('jumlah');

            this.jumlah = parseInt(page_type);
        },
        methods: {
            async load() {
                const  responses = await axios.get('https://portal-desa.herokuapp.com/customer/' + localStorage.getItem('sku'))
                this.detail=responses.data
                console.log(this.detail)
            },
            show () {
                this.$modal.show('hello-world');
            },
            async ubah () {
                 await axios.put('https://portal-desa.herokuapp.com/customer/update/' + this.sku,{
                    sku : this.sku,
                    alamat: this.detail.alamat
                })

            },
            async tambahAlamat () {
                axios.post('https://portal-desa.herokuapp.com/customer/add', {
                    sku: this.sku,
                    alamat: this.detail.alamat
                })
            },
            hide () {
                this.$modal.hide('hello-world');
            },
            async getKeranjang(){
                const response = await axios.get('https://portal-desa.herokuapp.com/keranjang/customer/' + this.sku)
                this.keranjang = response.data
                console.log(this.keranjang)
            },
            formSubmit(){

            },
            submit(){
                console.log()
                axios.post('https://portal-desa.herokuapp.com/transaksi/add', {
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