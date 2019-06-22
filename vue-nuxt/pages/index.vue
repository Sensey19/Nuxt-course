<template>
    <div>
        <div style="display: flex;" v-for="(post, index) in posts" :key="index">
            <h4>{{post.code}}</h4>
            <p>{{post.name}}</p>
            <p>{{post.description}}</p>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview" v-for="(block, index) in blocks" :key="index">
                        <a href="post.html">
                            <h2 class="post-title">
                                {{block.title1}}
                            </h2>
                            <h3 class="post-subtitle">
                                {{block.title2}}
                            </h3>
                        </a>
                        <p class="post-meta">{{block.post1}}
                            <a href="#">{{block.post2}}</a>
                            {{block.data}}</p>
                    </div>
                    <hr>

                    <!-- Pager -->
                    <div class="clearfix">
                        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                // blocks: []
                posts: [],
                blocks: [
                    {
                        title1: 'Man must explore, and this is exploration at its greatest',
                        title2: 'Man must explore, and this is exploration at its greatest',
                        post: 'Posted by',
                        post2: 'Start Bootstrap',
                        data: 'on September 24, 2019'
                    },
                    {
                        title1: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of\n' +
                            '                                mine.',
                        post: 'Posted by',
                        post2: 'Start Bootstrap',
                        data: 'on September 18, 2019'
                    },
                    {
                        title1: 'Science has not yet mastered prophecy',
                        title2: 'We predict too much for the next year and yet far too little for the next ten.',
                        post: 'Posted by',
                        post2: 'Start Bootstrap',
                        data: 'on August 24, 2019'
                    },
                    {
                        title1: 'Failure is not an option',
                        title2: 'Many say exploration is part of our destiny, but it’s actually our duty to future\n' +
                            '                                generations.',
                        post: 'Posted by',
                        post2: 'Start Bootstrap',
                        data: 'on July 8, 2019'
                    }
                ]
            }
        },
        created() {
            // axios.post('http://localhost:1337/graphql', {
            //     query: `{
            //                 posts {
            //                     name,
            //                        homes {
            //                     title1
            //                     title2
            //                     description1
            //                     description2
            //                     description3
            //                       }
            //                 }
            //             }`
            //     })
            //     .then(res => {
            //         const {data} = res;
            //         this.posts = data.data.posts[0].homes;
            //     })
            //     .catch(e => {
            //         console.error(e);
            //     });

        }
    }
</script>
