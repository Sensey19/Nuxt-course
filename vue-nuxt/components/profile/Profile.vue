<template>
    <div class="login-success">
        <h4 v-if="user !== null" class="login-success_title">Hello {{user.username}}!</h4>
        <h4 v-else class="login-success_title">Hello waiting... !</h4>
        <button @click="logOut" class="login-success_btn">Log out</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                user: state => state.user
            })
        },
        methods: {
            logOut() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login');
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Profile';
</style>