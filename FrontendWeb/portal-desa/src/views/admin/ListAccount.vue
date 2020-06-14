<template>
    <div class="container">
        <br>
        <h3>Daftar Pesanan </h3>
        <hr>
        <div>
            <b-card body-class="text-center" header-tag="nav">
                <template v-slot:header>
                    <b-nav card-header tabs>
                        <b-nav-item v-bind:active="tab === 1" v-on:click="tab1">Akun Merchant</b-nav-item>
                        <b-nav-item v-bind:active="tab === 2" v-on:click="tab2">Akun Customer</b-nav-item>
                    </b-nav>
                </template>
                <div class="card">
                    <p v-if="data.length===0 ">Tidak Ada Pesanan</p>
                    <b-card-text v-for="data in data" :key="data.sku">
                        <h3 v-if="tab === 2 && data.status === 4" style="color: forestgreen">Pesanan Diterima</h3>
                        <h3 v-else-if="tab === 2 && data.status === 5" style="color: darkred">Pesanan Ditolak</h3>
                        <h3 v-else-if="tab === 2" style="color: dodgerblue">Menunggu</h3>
                        <h3 v-if="tab === 4 && data[0].status === 2" style="color: dodgerblue">Menunggu</h3>
                        <h3 v-else-if="tab === 4 && data[0].status === 3" style="color: forestgreen">Pesanan
                            Diterima</h3>
                        <h3 v-else-if="tab === 4" style="color: darkred">Pesanan Ditolak</h3>
                        <div v-if="tab <3">
                            <p>Alamat Tujuan : {{data.alamat}}</p>
                            <p>Metode Pembayaran : {{data.metode}}</p>
                            <p>Harga : {{data.harga | numFormat}}</p>
                            <div v-if="tab === 2">
                                <img
                                        width="350px"
                                        :src="'https://portal-desa.herokuapp.com/transaksi/get/'+data.resi" alt="">
                                <div v-if="data.status !=4 && data.status !=5">
                                    <b-btn variant="danger" v-if="tab === 2" @click="tolakProduk(data.id)">Tolak</b-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <b-btn variant="success" v-if="tab === 2" @click="terimaProduk(data.id)">Terima
                                    </b-btn>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="tab >2">
                            <center>
                                <img
                                        width="450px"
                                        align="center"
                                        class="card"
                                        :src="'https://portal-desa.herokuapp.com'+data[1].gambar" alt="">
                            </center>
                            <p>Penginapan Tujuan : {{data[1].nama}}</p>
                            <p>Lama Menginap : {{data[0].lamaMenginap}}</p>
                            <p>Metode : {{data[0].metode}}</p>
                            <p>Harga : Rp. {{data[0].harga | numFormat}}</p>
                            <div v-if="tab === 4 ">
                                <img
                                        width="500px"
                                        :src="'https://portal-desa.herokuapp.com/transaksi/get/'+data[0].resi" alt="">
                                <div v-if=" data[0].status === 2">
                                    <b-btn variant="danger" @click="tolakPenginapan(data[0].id)">Tolak</b-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <b-btn variant="success" @click="terimaPenginapan(data[0].id)">Terima</b-btn>
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </div>
            </b-card>
        </div>
        <modal name="hello-world">
            <b-form @submit="formSubmit" class="mt-3">
                <b-form-row class="justify-content-sm-center mt-3">
                    <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                        <p>Resi Pembayaran</p>
                    </b-col>
                    <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                        <p>:</p>
                    </b-col>
                    <b-col cols="8" col md="5" lg="4" sm="7">
                        <div id="app">
                            <div v-if="!image">
                                <input type="file" @change="onFileChange">
                            </div>
                            <div v-else>
                                <img :src="image" width="120" height="100"/>
                            </div>
                        </div>
                    </b-col>
                </b-form-row>
                <b-form-row class="justify-content-md-center">
                    <b-col col md="4" lg="2">

                    </b-col>
                    <b-col col md="auto" lg="auto">

                    </b-col>
                    <b-col col md="auto" lg="auto" class="mt-2">
                        <button type="submit" id="tombol-daftar" class="pl-3 pr-3 btn btn-primary">Bayar</button>
                    </b-col>
                </b-form-row>
                <hr>
            </b-form>
        </modal>
        <br><br><br>
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        name: "ListAccount",
        mounted(){
            this.loadData()
        },
        data(){
            return {
                fields : ['name', 'alamat', 'username', 'email'],
                fields_customer : ['name', 'alamat', 'username', 'email'],
                perPage: 5,
                currentMerchantPage: 1,
                accountMerchant : [],
                accountCustomer : [],
                currentCustomerPage: 1
            }
        },
        methods : {
            async loadData(){
                const response = await axios.get('https://portal-desa.herokuapp.com/adminDev/account/merchant')
                this.accountMerchant = response.data
                const responses = await axios.get('https://portal-desa.herokuapp.com/adminDev/account/customer')
                this.accountCustomer=responses.data
                console.log(responses.data)
            },
        },
        computed: {
            rows_merchant (){
                return this.accountMerchant.length
            }
        }
    }

</script>

<style scoped>

</style>