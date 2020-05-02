<template>
    <b-container class="mb-5">

        <b-row class="justify-content-sm-center">
            <b-col col md="auto" sm="auto">
                <p id="logo">
                    <b-icon-people-circle></b-icon-people-circle>
                </p>
            </b-col>
        </b-row>

        <b-form @submit="formSubmit" class="mt-3" >
            <b-form-row class="justify-content-sm-center">
                <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                    <p>Gambar</p>
                </b-col>
                <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                    <p>:</p>
                </b-col>
                <b-col cols="8" col md="5" lg="4" sm="7">
                    <b-form-file
                            v-model="file"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                    ></b-form-file>
                </b-col>
            </b-form-row>
            <br>
            <b-form-row class="justify-content-sm-center">
                <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                    <p>Nama</p>
                </b-col>
                <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                    <p>:</p>
                </b-col>
                <b-col cols="8" col md="5" lg="4" sm="7">
                    <b-form-input
                            id="input-nama"
                            v-model="name"
                            required
                            type="text"
                            :placeholder="detail.nama"
                    ></b-form-input>
                </b-col>
            </b-form-row>

            <b-form-row class="justify-content-sm-center mt-3">
                <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                    <p>Nama Kepala Desa</p>
                </b-col>
                <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                    <p>:</p>
                </b-col>
                <b-col cols="8" col md="5" lg="4" sm="7">
                    <b-form-input
                            id="input-kepalaDesa"
                            v-model="kepalaDesa"
                            required
                            type="text"
                            :placeholder="detail.namaKepalaDesa"
                    ></b-form-input>
                </b-col>
            </b-form-row>
            <b-form-row class="justify-content-sm-center mt-3">
                <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                    <p>Jumlah Penduduk</p>
                </b-col>
                <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                    <p>:</p>
                </b-col>
                <b-col cols="8" col md="5" lg="4" sm="7">
                    <b-form-input
                            id="input-jumlah"
                            v-model="jumlah"
                            required
                            type="number"
                            min="0"
                    ></b-form-input>
                </b-col>
            </b-form-row>
            <b-form-row class="justify-content-sm-center mt-3">
                <b-col cols="3" col md="2" sm="2" lg="1" class="mt-2">
                    <p>Kecamatan</p>
                </b-col>
                <b-col cols="auto" col md="auto" lg="auto" sm="auto" class="mt-2">
                    <p>:</p>
                </b-col>
                <b-col cols="8" col md="5" lg="4" sm="7" >
                    <b-select v-on:change="test" v-model="kec" required >
                        <b-select-option selected  v-for="kecamatan in kecamatan" :key="kecamatan.sku"  v-bind:value="detail.kecamatan">{{kecamatan.nama}}</b-select-option>
                    </b-select>
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
        <p>{{detail.data}}</p>
    </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "FormDetailDesa",
        mounted() {
            this.load()
        },
        data(){
            return {
                detail:'',
                kecamatan :[],
                file:[],
                name: '',
                kepalaDesa: '',
                username: '',
                email :'',
                sku :'',
                jumlah : 0,
                kec:''
            }
        },
        methods : {
            async load(){
                this.sku=localStorage.getItem("sku")
                const response = await axios.get('http://localhost:9000/desa/desa/skuAdmin/'+this.sku)
                this.detail=response.data.data
                const responses = await axios.get('http://localhost:9000/kecamatan/')
                this.kecamatan = responses.data
            },
            formSubmit(){
                console.log("testting")
            },
            test(){

            }
        }
    }
</script>

<style scoped>

</style>