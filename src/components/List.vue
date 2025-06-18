<template>
    <div>
        <h2>这是List组件 {{ str }}</h2>
        <hr>
        <div v-for="item in list" :key="item.id">{{ item.name }}</div>
        <News :str="str"></News>
    </div>
</template>

<script>
import News from "./News.vue"
export default {
    name: 'List',
    data() {
        return {
            // list: []
        }
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        str: {
            type: String,
            default: ''
        }
    },
    components: {
        News
    }
}
</script>

<style></style>