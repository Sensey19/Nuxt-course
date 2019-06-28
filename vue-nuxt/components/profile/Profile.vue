<template>
    <div class="login-success">
        <h4 v-if="user !== null" v-cloak class="login-success_title">Hello {{user.username}}!</h4>
        <h4 v-else v-cloak class="login-success_title">waiting...</h4>
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
                return this.$store.dispatch('logout');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Profile';
</style>