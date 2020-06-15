<template>
    <b-container>
        <h1 class="judul mt-3">List Desa</h1>
        <hr>
        <b-row class="mt-4 justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-xs-center">
            <b-col cols="12" col lg="7" md="10" sm="12">
                <input class="form-control" type="text" v-model="searchQuery" placeholder="Cari desa" />
            </b-col>
        </b-row>

        <b-row class="mt-3 mb-3 justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-xs-center">
            <b-col cols="12" col lg="10">
                <b-row v-for="desa in filteredResources" :key="desa.sku" class="">
                    <b-col cols="auto" col sm="auto" lg="3">

                    </b-col>
                    <b-col cols="12" col lg="6" sm="auto" style="justify-content: left">
                        <router-link  :to="'/detailDesaAdmin/'+desa.nama"><h5>{{desa.nama}} ( {{desa.kecamatan}} )</h5></router-link>
                    </b-col>
                    <b-col cols="auto" col sm="auto" lg="3">

                    </b-col>
                </b-row>
            </b-col>
        </b-row>

<!--        <div v-if="desa.length!=0" class="row container">-->
<!--            <b-row class="container"  v-for="desa in filteredResources" :key="desa.sku" >-->
<!--                <b-col  col lg="1" >-->
<!--                </b-col>-->
<!--                <b-col  col lg="5" >-->
<!--                    <router-link  :to="'/detailDesaAdmin/'+desa.nama"><h5>{{desa.nama}}</h5></router-link>-->
<!--                </b-col>-->
<!--                <b-col col lg="2">-->
<!--                     <p>Kecamatan  {{desa.kecamatan}}</p>-->
<!--                </b-col>-->
<!--            </b-row>-->
<!--            <br>-->
<!--        </div>-->
<!--        <div v-else>-->
<!--            <center><img src="../../assets/gif/25.gif" alt=""></center>-->
<!--        </div>-->
    </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ListDesa",
        mounted() {
            this.loadData()
        },
        data(){
            return {
                desa : [],
                searchQuery:''
            }
        },
        methods: {
            async loadData(){
                const response = await axios.get('https://portal-desa.herokuapp.com/desa/')
                this.desa = response.data
            }
        },
        computed: {
            filteredResources (){
                if(this.searchQuery){
                    return this.desa.filter((desa)=>{
                        return this.searchQuery.toLowerCase().split(' ').every(v => desa.nama.toLowerCase().includes(v))
                        // return item.nama.startsWith(this.searchQuery);
                    })
                }else{
                    return this.desa;
                }
            }
        }
    }
</script>

<style scoped>
    .judul {
         text-align: left;
         font-family: "Arial Black";
     }
</style>