<template>
  <div class="good">
    <good-list-item 
    v-for="item in goodList" 
    :key="item.id"
    :items="item"/>
  </div>
</template>

<script>
import goodListItem from 'components/content/goods/goodListItem'
export default {
  props: {
    goodList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    goodListItem
  }
}
</script>

<style>
.good {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>