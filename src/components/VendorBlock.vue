<template>
  <div class="vendor-block">
    <h3>{{ vendor }}</h3>
    <div>Terms</div>
    <div>Status</div>
  </div>
</template>

<script>
export default {
  props: {
    vendor: String
  }
}
</script>

<style lang="postcss" scoped>
.vendor-block {
  // display: inline-block;
  margin-right: 15px;
  width: 200px;
  text-align: center;
}
</style>
