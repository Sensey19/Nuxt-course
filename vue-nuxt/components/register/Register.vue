<template>
    <div class="login">
        <h4 class="login-title">Register</h4>

        <div class="login-block">
            <label class="login-label">Name</label>
            <input v-model="name" type="text">
        </div>

        <div class="login-block">
            <label class="login-label">Email</label>
            <input v-model="email" type="email" placeholder="E-mail">
        </div>

        <div class="login-block">
            <label class="login-label">Password</label>
            <input v-model="password" type="password">
        </div>
        <button @click="registerUser" class="login-register">Register</button>

        <buttons></buttons>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            registerUser() {
                const vm = this;
                let data = {
                    username: vm.name,
                    email: vm.email,
                    password: vm.password
                }

                vm.$store.dispatch('register', data)
                    .then(res => {
                        vm.$router.push('/');
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Register';
</style>