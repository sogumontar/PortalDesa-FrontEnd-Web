<template>
    <div>
        <p>Ini Daftar Desa di Kecamatan {{value}}</p>
    </div>
</template>

<script>
    export default {
        name: "DetailProdukPage",
        data(){
            return {
                value:this.$route.params.sku
            }
        }
    }
</script>

<style scoped>

</style>