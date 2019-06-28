<template>
    <div>
        <!-- Banner -->
        <main-banner banner="/img/placement.jpeg"
                     title="Dashboard"
                     subheading="Placement">
        </main-banner>

        <dashboard></dashboard>
    </div>
</template>

<script>
    import Dashboard from '@/components/dashboard/Dashboard';

    export default {
        components: {
            Dashboard
        }
    }
</script>

<style scoped>

</style>