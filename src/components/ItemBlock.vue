<template>
  <div class="item-block">
      <div class="item-block__overview">
          <div>
              <div><strong>{{ item }}</strong></div>
              <div>Item ID: ##############</div>
              <div>Spec Number</div>
          </div>
          <hr>
          <div>
              <div>Type</div>
              <div>{{ qty }} | UOM</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    item: String
  },
  data () {
    return {
      qty: 3,
      prices: [5, 8, 12, 3, 5]
    }
  }
}
</script>

<style lang="postcss" scoped>
.item-block {
  // display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px;
}

.item-price {
  padding: 20px;
}

</style>
