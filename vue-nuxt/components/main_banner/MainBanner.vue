<template>
    <header class="masthead" :style="`background-image: url(${banner})`">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-10 mx-auto">
                    <div class="site-heading">
                        <h1>{{title}}</h1>
                        <span class="subheading">{{subheading}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        props: ['banner', 'title', 'subheading'],
        data() {
            return {}
        }
    }
</script>
