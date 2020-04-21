<template>
    <b-container class="mt-4">
        <b-row>
            <b-col xl="8">
                <p id="judul">Selamat datang di Aplikasi Portal Desa.</p>
                <p>Aplikasi dari Kabupaten Toba yang menyediakan informasi setiap
                    desa yang terdapat di Kabupaten Toba</p>
            </b-col>
        </b-row>
        <hr>
        <b-row class="">
<!--            <li >-->
<!--                {{kecamatan.nama}}-->
                <b-col cols="12" col lg="4" sm="12" md="6" class="p-4" v-for="kecamatan in kecamatan.slice(batasbawah, batasatas)" :key="kecamatan.sku">
                    <h5>{{kecamatan.nama}}</h5>
                    <b-img rounded=""
                           src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"
                           fluid></b-img>
                </b-col>
<!--            </li>-->
        </b-row>
        <div>
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    @change="tambah"
                    align="center"
            ></b-pagination>
        </div>

<!--        current page : {{ this.currentPage }}-->
<!--        last page : {{ this.lastpage }}-->
<!--        batas bawah : {{ this.batasbawah }}-->
<!--        batas atas : {{ this.batasatas }}-->
<!--        pengurangan : {{ currentPage - lastpage }}-->
<!--        Tes : {{ tes }}-->
        <hr>
        <p id="judul-desa-populer" class="p-2">Desa Populer</p>
        <b-row class="p-2 pb-4">
            <b-col cols="12" col lg="6" sm="12" md="6">
                <b-img rounded=""
                       src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Kecamatan_Balige%2C_Toba_Samosir_02.jpg"
                       fluid></b-img>
            </b-col>
            <b-col>
                <table id="table">
                    <tr>
                        <td>Nama Desa</td>
                        <td>:</td>
                        <td>Desa Meat</td>
                    </tr>
                    <tr>
                        <td>Kepala Desa</td>
                        <td>:</td>
                        <td>Arta Napitupulu</td>
                    </tr>
                    <tr>
                        <td>Lokasi</td>
                        <td>:</td>
                        <td>Jalan Sisingamangaraja 19</td>
                    </tr>
                    <tr>
                        <td>Produk</td>
                        <td>:</td>
                        <td>
                            <li>Singkong</li>
                            <li>Kopi</li>
                            <li>Tas Rajutan</li>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row class="p-4">
            <p>Deskripsi: Desa Meat berlokasi di kecamatan balige, desa ini sering digubakan sebagai tempat untuk
                berkemah
                oleh para masyarakat dari luar kota maupun dari dalam daerah. Hampir setiap minggu tempat ini ramai
                digunakan
                sebagai tempat berkemah.</p>
        </b-row>
        <h1>This is Desa</h1>
    </b-container>
</template>

<script>
    import axios from 'axios'

    export default {
        devServer: {
            proxy: {
                '^/api/': {
                    target: 'http://localhost:9000/kecamatan/',
                    changeOrigin: true
                }
            }
        },
        data() {
            return {
                perPage: 6,
                currentPage: 1,
                batasbawah: 0,
                batasatas: 6,
                lastpage: 1,
                tes: "",
                kecamatan: []
            }
        },
        async mounted() {
            this.load()
        },
        methods: {
            async load() {
                const response = await axios.get('http://localhost:9000/kecamatan/')
                this.kecamatan = response.data
            },
            tambah (){
                //Lagi di coba

            }
        },
        computed: {
            rows() {
                return this.kecamatan.length
            }

        }
    }

</script>

<style scoped>

    td {
        font-size: 1.3em;
        padding-right: 10px;
    }

    @media only screen and (max-width: 600px) {
        #judul {
            font-size: 1.5em;
            font-weight: bolder
        }

        #judul-desa-populer {
            font-size: 1.2em;
            font-weight: bold;
        }

    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        #judul {
            font-size: 1.5em;
            font-weight: bolder
        }

        #judul-desa-populer {
            font-size: 1.2em;
            font-weight: bold;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        #judul {
            font-size: 1.9em;
            font-weight: bolder
        }

        #judul-desa-populer {
            font-size: 1.5em;
            font-weight: bold;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        #judul {
            font-size: 2em;
            font-weight: bolder
        }

        #judul-desa-populer {
            font-size: 1.7em;
            font-weight: bold;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        #judul {
            font-size: 2.4em;
            font-weight: bolder
        }

        #judul-desa-populer {
            font-size: 1.9em;
            font-weight: bold;
        }
    }
</style>