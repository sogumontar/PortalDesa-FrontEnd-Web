<template>
    <b-container>
        <h1 class="judul mt-3">Data Artikel Desa</h1>
        <hr class="mb-4">
        <b-card header-tag="nav">
            <template v-slot:header>
                <b-nav card-header tabs>
                    <b-nav-item v-bind:active="tab === 1" v-on:click="tab1">Artikel</b-nav-item>
                    <b-nav-item v-bind:active="tab === 2" v-on:click="tab2">Berita</b-nav-item>
                    <b-nav-item v-bind:active="tab === 3" v-on:click="tab3">Pengumuman</b-nav-item>
                </b-nav>
            </template>
            <div class="card">
                <b-card-text>
                    <div v-for="artikel in artikel" :key="artikel.id" >
                        <div v-if="tab === 1 && artikel[0].jenis === 'Artikel'" class="pl-4 pt-4 pr-3">
                            <b-row>
                                <div v-if="artikel === null">
                                    <b-col>
                                        <h3 style="text-align: center">Artikel Tidak Ada</h3>
                                    </b-col>
                                </div>
                                <div v-else>
                                    <b-col cols="12" col lg="9">
                                        <h3>{{ artikel[0].judul }}</h3>
                                        <p>Penulis: {{ artikel[0].penulis }}, {{ artikel[1].nama }}, {{ artikel[1].kecamatan }}</p>
                                        <p style="text-align: justify" >{{artikel[0].isi}}</p>
                                    </b-col>
                                </div>
                            </b-row>
                            <b-btn variant="danger" @click="hapus(artikel[0].id)" class="mb-3">Hapus Artikel</b-btn>
                        </div>

                        <div v-if="tab === 2 && artikel[0].jenis === 'Berita'" class="pl-4 pt-4 pr-3">
                            <b-row>
                                <div v-if="artikel === null">
                                    <b-col>
                                        <h3 style="text-align: center">Berita Tidak Ada</h3>
                                    </b-col>
                                </div>
                                <div v-else>
                                    <b-col cols="12" col lg="9">
                                        <h3>{{ artikel[0].judul }}</h3>
                                        <p>Penulis: {{ artikel[0].penulis }}, {{ artikel[1].nama }}, {{ artikel[1].kecamatan }}</p>
                                        <p style="text-align: justify" >{{artikel[0].isi}}</p>
                                    </b-col>
                                </div>
                            </b-row>
                            <b-btn variant="danger" @click="hapus(artikel[0].id)" class="mb-3">Hapus Berita</b-btn>
                        </div>

                        <div v-if="tab === 3 && artikel[0].jenis === 'Pengumuman'" class="pl-4 pt-4 pr-3">
                            <b-row>
                                <div v-if="artikel === null">
                                    <b-col>
                                        <h3 style="text-align: center">Pengumuman Tidak Ada</h3>
                                    </b-col>
                                </div>
                                <div v-else>
                                    <b-col cols="12" col lg="9">
                                        <h3>{{ artikel[0].judul }}</h3>
                                        <p>Penulis: {{ artikel[0].penulis }}, {{ artikel[1].nama }}, {{ artikel[1].kecamatan }}</p>
                                        <p style="text-align: justify" >{{artikel[0].isi}}</p>
                                    </b-col>
                                </div>
                            </b-row>
                            <b-btn variant="danger" @click="hapus(artikel[0].id)" class="mb-3">Hapus Pengumuman</b-btn>
                        </div>
                    </div>
                </b-card-text>
            </div>
        </b-card>
    </b-container>
<!--    <div class="row container">-->
<!--        <div class="col-md-12">-->
<!--            <b-btn variant="primary">Artikel</b-btn>&nbsp;&nbsp;-->
<!--            <b-btn variant="s"><router-link to="/berita">Berita</router-link></b-btn>&nbsp;&nbsp;-->
<!--            <b-btn variant="s"><router-link to="/pengumuman" style="text-emphasis-color: #DCE6EB">Pengumuman</router-link></b-btn>-->
<!--            <br><br><br>-->
<!--            <div class="container">-->
<!--                <div class="card">-->
<!--                    <br><br><br><br>-->
<!--                    <b-card-text v-for="artikel in artikel" :key="artikel.id">-->
<!--                        <div v-if="artikel[0].jenis === 'Artikel'">-->
<!--                            <p>Judul : {{artikel[0].judul}}</p>-->
<!--                            <div v-if="artikel[0].isi.length >50">-->
<!--                                <p>Isi : {{artikel[0].isi}}...</p>-->
<!--                            </div>-->
<!--                            <div v-else>-->
<!--                                <p>Isi : {{artikel[0].isi}}</p>-->
<!--                            </div>-->
<!--                            <p>Penulis : {{artikel[0].penulis}}</p>-->
<!--                            <p>Sumber : {{artikel[0].sumber}}</p>-->
<!--                            <p>Kecamatan : {{artikel[1].kecamatan}}</p>-->
<!--                            <p>Desa : {{artikel[1].nama}}</p>-->
<!--                            <b-btn variant="danger" @click="hapus(artikel[0].id)">Hapus</b-btn>-->
<!--                        </div>-->
<!--                    </b-card-text>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->

</template>

<script>
    import axios from "axios";

    export default {
        name: "ArtikelPage",
        data() {
            return {
                tab: 1,
                artikel: [],
            }
        },
        async mounted() {
            this.load()
        },
        methods: {
            async load() {
                const response = await axios.get('https://portal-desa.herokuapp.com/artikel/web/')
                this.artikel = response.data
                console.log(this.artikel)
            },
            async hapus(sku){
                 await axios.delete('https://portal-desa.herokuapp.com/artikel/delete/'+sku)
                .then(alert("Hapus Artikel Sukses")),
                     window.location.href="/artikelAll"
            },
            async tab1(){
                this.tab = 1
            },
            async tab2(){
                this.tab = 2
            },
            async tab3(){
                this.tab = 3
            },

        }
    }
</script>

<style scoped>
    .judul {
        text-align: left;
        font-family: "Arial Black";
    }
</style>