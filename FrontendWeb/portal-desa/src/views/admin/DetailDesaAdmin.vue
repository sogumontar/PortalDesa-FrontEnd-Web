<template>
    <div>
        <h3>Desa {{value}}</h3>
        <hr>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "DetailKecamatanAdmin",
        data() {
            return {
                value: this.$route.params.sku,
                desa : []
            }
        }, devServer: {
            proxy: {
                '^/api/': {
                    target: "http://localhost:9000/desa/+'this.$route.params.sku'",
                    changeOrigin: true
                }
            }
        }, async mounted() {
            this.load()
        },
        methods: {
            async load() {
                const response = await axios.get('http://localhost:9000/desa/'+this.$route.params.sku)
                this.desa = response.data
                console.log(response.data)
            }
        }
    }
</script>

<style scoped>

</style>