<template>
    <div>
        <h2>这是List组件</h2>
        <div v-for="item in list" :key="item.id">{{ item.name }}</div>
        <News></News>
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
        }
    },
    components: {
        News
    }
}
</script>

<style></style>