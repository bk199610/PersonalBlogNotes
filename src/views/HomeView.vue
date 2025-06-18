<template>
    <div>
        主页
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
    beforeCreate() {
        console.log('生命周期函数：beforeCreate');
        // 生命周期函数：beforeCreate undefined undefined
        // axios
        //     .get("/api/district.json") // 请求本地 JSON 文件
        //     .then((res) => {
        //         console.log('我是beforeCreate阶段没封装拿到的',res.data, document.getElementById('app'));
        //     });
            // this.getData() //  TypeError: this.getData is not a function
    },
    created() {
        console.log('生命周期函数：created');
        // 生命周期函数：created undefined {__ob__: Observer}
        // axios
        //     .get("/api/district.json") // 请求本地 JSON 文件
        //     .then((res) => {
        //         console.log('我是created阶段没封装拿到的',res.data, document.getElementById('app'));
        //     });
            this.getData()
    },
    beforeMount() {
        console.log('生命周期函数：beforeMount');
        // 生命周期函数：beforeMount undefined {__ob__: Observer}
    },
    mounted() {
        console.log('生命周期函数：mounted');
        // 生命周期函数：mounted <div id=​"app">​…​</div>​ {__ob__: Observer}
    },
    beforeUpdate() {
        console.log('生命周期函数：beforeUpdate');

    },
    updated() {
        console.log('生命周期函数：updated');

    },
    beforeDestroy() {
        console.log('生命周期函数：beforeDestroy');

    },
    destroyed() {
        console.log('生命周期函数：destroyed');

    },
    activated() {
        console.log('keep-alive生命周期函数：activated');
    },
    deactivated() {
        console.log('keep-alive生命周期函数：deactivated');
    },
    methods: {
        getData() {
            axios
                .get("/api/district.json") // 请求本地 JSON 文件
                .then((res) => {
                    console.log('我是封装拿到的',res.data);
                    this.list = res.data.data
                });
        }
    }
}
</script>

<style></style>