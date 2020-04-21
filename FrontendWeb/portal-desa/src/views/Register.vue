<template>
    <div class="card-body">
        <form @submit="formSubmit">
            <strong>Nick Name:</strong>
            <input type="text" class="form-control" v-model="nickname">
            <strong>Username:</strong>
            <input type="text" class="form-control" v-model="username">
            <strong>Email:</strong>
            <input type="email" class="form-control" v-model="email">
            <strong>Password:</strong>
            <input type="password" class="form-control" v-model="password">
            <strong>Confirm Password:</strong>
            <input type="password" class="form-control" v-model="confirmPassword">
            <button class="btn btn-success">Submit</button>
        </form>
        <strong>Output:</strong>
        <pre>
            {{output}}
        </pre>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                name : '',
                username : '',
                email : '',
                password : '',
                confirmPassword : '',
                output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:9000/auth/signup', {
                    name : this.nickname,
                    username : this.username,
                    email : this.email,
                    password : this.password,
                    confirmPassword : this.confirmPassword,
                    role : "ROLE_USER"
                })
                    .then(function (response) {
                        currentObj.output = response.data;
                        if(response.data.accessToken){
                            console.log("Register Success")
                        }

                        this.$router.push({name: 'Login'})
                    })
                    .catch(function (err) {
                        currentObj.output = err;
                    });
            }
        }
    }
</script>

<style scoped>

</style>