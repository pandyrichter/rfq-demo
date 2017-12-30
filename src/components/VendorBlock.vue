<template>
  <div class="vendor-block">
    <h3>{{ vendor }}</h3>
    <div>Status</div>
    <div>Terms</div>
    <div>Discount</div>
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
  /* display: inline-block; */
  margin-right: 10px;
  /* default width */
  width: 225px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 3px;
}
</style>
