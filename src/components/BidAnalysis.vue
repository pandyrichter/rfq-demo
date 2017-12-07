<template>
  <div class="bidanalysis">
      <h2>Bid Analysis</h2>
      <div class="bidanalysis__toolbar">
          <div>Bid Template Type</div>
          <div>Bid By Item: False</div>
      </div>
      <slot>
          Select a bid group to complete analysis.
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

  &__toolbar {
    border-bottom: 1px solid lightblue;
    margin-bottom: 15px;
    padding: 10px 0px;
  }

}
</style>
