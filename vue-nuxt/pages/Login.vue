<template>
    <div>
        <!-- Banner -->
        <main-banner banner="/img/login-bg.jpg"
                     title="Login"
                     subheading="Welcome to us!">
        </main-banner>

        <authorization></authorization>
    </div>
</template>

<script>
    import Authorization from '@/components/login/Authorization';

    export default {
        components: {
            Authorization
        }
    }
</script>