<template>
    <div>
        <h1>主页</h1>
        <List :list="list"/>
    </div>
</template>

<script>
import List from "../components/List.vue"
import axios from "axios"
export default {
    data() {
        return {
            str: '哈哈哈',
            list: []
        }
    },
    components: {
        List
    },
}
</script>

<style>
</style>