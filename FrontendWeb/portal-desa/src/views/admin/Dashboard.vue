<template>
    <div>
        <div>
            <br>
            <h2>Dafar Pesanan</h2>
            <hr>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Dashboard"
        ,
        data() {
            return {
                nama :localStorage.getItem('nickName')
            }
        }
    }
</script>

<style scoped>

</style>