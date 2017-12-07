<template>
  <div>
      <div class="bidgroup" :class="{ bidgroupactive : active }"  @click="setCurrentBidGroup(bidgroup.id)">
          <div>
            <div>{{ bidgroup.name }}</div>
            <div><strong>{{ bidgroup.id }}</strong></div>
          </div>
          <div>{{ bidgroup.items }}</div>
          <div>Reviewed: {{ bidgroup.reviewed }}</div>
          <div>Select</div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'BidGroup',
  props: {
    bidgroup: Object,
    active: Boolean
  },
  methods: {
    ...mapMutations([
      'setCurrentBidGroup'
    ])
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
  cursor: pointer;

  &:hover {
      background-color: lightgray;
  }
}

.bidgroupactive {
  display: flex;
  border: 2px solid red;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px;
}

</style>
