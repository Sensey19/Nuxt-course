<template>
    <div class="login__buttons">
        <nuxt-link to="/login"
                     :class="{active: $route.path === '/login'}"
                     class="login__buttons-btn">
            Sign In
        </nuxt-link>

        <nuxt-link to="/register"
                     :class="{active: $route.path === '/register'}"
                     class="login__buttons-btn">
            Sign Up
        </nuxt-link>
    </div>
</template>
