<template>
    <div>
        <div class="dashboard" v-for="(post, index) in category" :key="index">
            <div v-if="!post.editBool" class="dashboard__block">
                <p class="dashboard__block-text">{{post.id}}</p>
                <p class="dashboard__block-text">{{post.title}}</p>
                <p class="dashboard__block-text">{{post.describe}}</p>
            </div>
            <div v-else class="dashboard__block">
                <input class="dashboard__block-text" v-model="post.id">
                <input class="dashboard__block-text" v-model="post.title">
                <input class="dashboard__block-text" v-model="post.describe">
            </div>

            <div class="dashboard__btn">
                <button v-if="!post.editBool" @click="edit(index)" class="dashboard__btn-edit">edit</button>
                <button v-else @click="save(index)" class="dashboard__btn-edit">save</button>

                <button @click="remove(index)" class="dashboard__btn-remove">remove</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                category: [
                    {
                        id: 1,
                        title: 'one',
                        describe: 'anyway',
                        editBool: false
                    },
                    {
                        id: 2,
                        title: 'two',
                        describe: 'anyway',
                        editBool: false
                    }
                ]
            }
        },
        methods: {
            edit(i) {
                this.category[i].editBool = true;
            },
            save(i) {
                this.category[i].editBool = false;
            },
            remove(i) {
                this.category.splice(i, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Dashboard';
</style>