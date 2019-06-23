<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="/">Start Bootstrap</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/sample-post">Sample Post</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/contact">Contact</nuxt-link>
                    </li>


                    <li v-if="!loginSuccess" class="nav-item">
                        <nuxt-link to="/login">Login</nuxt-link>
                    </li>
                    <li v-else class="nav-item">
                        <nuxt-link to="/profile">Profile</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            loginSuccess : function(){ return this.$store.getters.loginSuccess}
        },
    }
</script>