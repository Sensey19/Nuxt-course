<template>
    <div>
        <!-- Banner -->
        <main-banner banner="/img/login-bg.jpg"
                     title="Profile"
                     subheading="Welcome to us!">
        </main-banner>

        <profile></profile>
    </div>
</template>

<script>
    import Profile from '@/components/profile/Profile';

    export default {
        components: {
            Profile
        }
    }
</script>
