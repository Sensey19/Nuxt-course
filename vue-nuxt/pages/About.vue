<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <!--<p v-for="app in abouts">{{app.title}}</p>-->
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
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
                // abouts: []
            }
        },
        mounted() {
            // axios.post('http://localhost:1337/graphql', {
            //     query: `{
            //                 posts {
            //                     name,
   	     //                        abouts {
            //                     title
  	      //                       }
            //                 }
            //             }`
            // })
            //     .then(res => {
            //         const {data} = res;
            //         this.abouts = data.data.posts[0].abouts;
            //     })
            //     .catch(e => {
            //         console.error(e);
            //     });

        }
    }
</script>
