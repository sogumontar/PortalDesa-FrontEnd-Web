<template>
    <div>
        <p>Ini List Account</p>
        <div right v-if="accountMerchant.length!=0">
            <p>Daftar Account Admin Desa</p>
            <div class="overflow-auto">
                <b-table
                        id="my-table"
                        :items="accountMerchant"
                        :per-page="perPage"
                        :current-page="currentMerchantPage"
                ></b-table>
                <b-pagination
                        v-model="currentMerchantPage"
                        :total-rows="accountMerchant.length"
                        :per-page="perPage"
                        aria-controls="my-table"
                ></b-pagination>
            </div>
            <p>Daftar Account Customer</p>
            <div class="overflow-auto">
                <b-table
                        id="my-table-customer"
                        :items="accountCustomer"
                        :per-page="perPage"
                        :current-page="currentCustomerPage"
                ></b-table>
                <b-pagination
                        v-model="currentMerchantPage"
                        :total-rows="accountMerchant.length"
                        :per-page="perPage"
                        aria-controls="my-table"
                ></b-pagination>
            </div>
        </div>
        <div v-else>
            <p>Daftar Account Admin Desa</p>
            <div class="overflow-auto">
                <center><img src="../../assets/gif/25.gif" alt=""></center>
            </div>
            <p>Daftar Account Customer</p>
            <div class="overflow-auto">
                <center><img src="../../assets/gif/25.gif" alt=""></center>
            </div>
        </div>
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
            }
        }
    }

</script>

<style scoped>

</style>