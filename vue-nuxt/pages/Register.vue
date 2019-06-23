<template>
    <div>
        <!-- Banner -->
        <main-banner banner="/img/login-bg.jpg"
                     title="Register"
                     subheading="Welcome to us!">
        </main-banner>

        <register></register>
    </div>
</template>

<script>
    import Register from '@/components/register/Register';

    export default {
        components: {
            Register
        }
    }
</script>