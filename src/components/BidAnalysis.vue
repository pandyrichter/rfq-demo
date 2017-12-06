<template>
  <div class="bidanalysis">
      <h2>Bid Group</h2>
      <div class="bidanalysis__toolbar">
          <div>Bid Group Type: General</div>
      </div>
      <slot>
          I'm an empty bid group
      </slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
.bidanalysis {
    text-align: left;
}
</style>
