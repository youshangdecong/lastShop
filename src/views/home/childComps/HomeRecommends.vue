<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends: {
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style>
  .recommend {
    display: flex;
    justify-content:space-around;
    padding: 10px 0 20px;
    border-bottom: 7px solid pink;
  }
  .recommend > div {
    flex:1;
    width:25%;
    text-align: center;
    font-size: 14px;
  }
  .recommend > div img {
    width: 80%;
    margin-bottom: 5px;
  }
</style>