<template>
    <div class="login">
        <h4 class="login-title">Login</h4>
        <div class="login-block">
            <label class="login-label">Email</label>
            <input v-model="email" type="email" placeholder="E-mail">
        </div>

        <div class="login-block">
            <label class="login-label">Password</label>
            <input v-model="password" type="password">
        </div>
        <button @click="loginUser" class="login-register">Login</button>

        <buttons></buttons>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            loginUser() {
                const vm = this;

                let identifier = vm.email;
                let password = vm.password;
                vm.$store.dispatch('login', {identifier, password})
                    .then(res => {
                        vm.$router.push('/');
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Authorization.scss';
</style>