<template>
    <div>
        <div v-for="item in list" :key="item.id">{{ item.name }}</div>
    </div>
</template>

<script>
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
    beforeCreate() {
        console.log('子组件-生命周期函数：beforeCreate', this.$el, this.$data);
        // 生命周期函数：beforeCreate undefined undefined
    },
    created() {
        console.log('子组件-生命周期函数：created');
        // 生命周期函数：created undefined {__ob__: Observer}
    },
    beforeMount() {
        console.log('子组件-生命周期函数：beforeMount');
        // 生命周期函数：beforeMount undefined {__ob__: Observer}
    },
    mounted() {
        console.log('子组件-生命周期函数：mounted');
        // 生命周期函数：mounted <div id=​"app">​…​</div>​ {__ob__: Observer}
    },
    beforeUpdate() {
        console.log('子组件-生命周期函数：beforeUpdate');
    },
    updated() {
        console.log('子组件-生命周期函数：updated');
    },
    beforeDestroy() {
        console.log('子组件-生命周期函数：beforeDestroy');
    },
    destroyed() {
        console.log('子组件-生命周期函数：destroyed');
    },
}
</script>

<style></style>