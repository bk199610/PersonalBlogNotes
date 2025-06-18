<template>
    <div>
        <h1>主页</h1>
        <hr>
        <List :str="str1" :list="list"/>
    </div>
</template>

<script>
import List from "../components/List.vue"
export default {
    data() {
        return {
            str1: '哈哈哈，这是home中的str1',
            list: [
                {id:0, name: 'home中的List数据item1'},
                {id:1, name: 'home中的List数据item2'},
                {id:2, name: 'home中的List数据item3'},
            ]
        }
    },
    components: {
        List
    },
}
</script>

<style>
</style>