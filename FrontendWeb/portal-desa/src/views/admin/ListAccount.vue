<template>
    <div>
        <p>Ini List Account</p>
        <p>Daftar Account Admin Desa</p>
        <div right v-if="accountMerchant.length!=0">
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
                const response = await axios.get('http://localhost:9000/adminDev/account/merchant')
                this.accountMerchant = response.data
                const responses = await axios.get('http://localhost:9000/adminDev/account/customer')
                this.accountCustomer=responses.data
                console.log(responses.data)
            }
        }
    }

</script>

<style scoped>

</style>