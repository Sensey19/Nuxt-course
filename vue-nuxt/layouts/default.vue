<template>
    <div>
        <!-- Page Header -->
        <header-component></header-component>

        <nuxt/>
        <!-- Footer -->
        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        created() {
            const vm = this;

            if (process.browser) {
                const jwt = localStorage.token;
                vm.$store.dispatch('jwtChecking', jwt);
            }
        }
    }
</script>
