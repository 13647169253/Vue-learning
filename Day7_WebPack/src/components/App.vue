<template>
  <div>
    <h1>这是 App 根组件</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
/* scoped 只会影响当前组件内的标签 */
<style scoped>
h1 {
  color: red;
}
</style>