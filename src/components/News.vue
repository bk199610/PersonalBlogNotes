<template>
  <h3>
    这是News组件 {{ str }}
  </h3>
</template>

<script>
export default {
    props: {
        str: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>