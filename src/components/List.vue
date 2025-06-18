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
}
</script>

<style></style>