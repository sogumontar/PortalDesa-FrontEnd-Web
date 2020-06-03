<template>
    <div id="app">

        <div class="panel panel-default">
            <div class="panel-heading" style="font-weight:bold"><span class="glyphicon glyphicon-align-justify"></span> All Resources</div>
            <div class="row">
                <div class="search-wrapper panel-heading col-sm-12">
                    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                </div>
            </div>
            <div class="panel-body" style="max-height: 400px;overflow-y: scroll;">
                <table v-if="resources.length" class="table">
                    <thead>
                    <tr>
                        <th>Resource</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in filteredResources" :key="item.nama">
                        <td><a v-bind:href="item.uri" target="_blank">{{item.nama}}</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Search",
        mounted() {
            this.load()
        },
        methods:{
          async load(){
              const response = await axios.get('https://portal-desa.herokuapp.com/penginapan/')
              this.resources = response.data
              console.log(this.resources)
          }
        },
        data() {
            return {
                searchQuery:'',
                resources:[]
            };
        },
        computed: {
            filteredResources (){
                if(this.searchQuery){
                    return this.resources.filter((item)=>{
                        return item.title.startsWith(this.searchQuery);
                    })
                }else{
                    return this.resources;
                }
            }
        }
    }
</script>

<style scoped>

</style>