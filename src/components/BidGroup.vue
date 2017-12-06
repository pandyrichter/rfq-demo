<template>
  <div>
      <div class="bidgroup" @click="selectBidGroup">
          <div>
            <div>{{ bidgroup.name }}</div>
            <div><strong>{{ bidgroup.id }}</strong></div>
          </div>
          <div>{{ bidgroup.items }}</div>
          <div>Select</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BidGroup',
  props: {
    bidgroup: Object
  },
  methods: {
    selectBidGroup () {
      console.log('Selected bid group!')
    }
  }
}
</script>

<style lang="postcss" scoped>
.bidgroup {
  display: flex;
  border: 1px solid blue;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px;

  &:hover {
      background-color: lightgray;
  }
}

</style>
