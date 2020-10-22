<template>
  <div class="detail-good-info" v-if="Object.keys(goods).length !==0">
    <p class="detail-title">{{goods.title}}</p>
    <div class="detail-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
     <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="mail-info">
     <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-title {
    margin: 10px 0;
    font-size: 16px;
    padding: 0 10px;
    font-weight: 700;
  }
  .detail-price {
    position: relative;
  }
  .n-price {
    font-size: 26px;
    color: red;
    margin-left: 7px;
  }
  .o-price {
    margin-left: 10px;
    text-decoration:line-through;
    color: #ccc;
  }
  .discount {
    position: relative;
    top: -10px;
    left: 5px;
    font-size: 14px;
    border-radius: 10px;
    background-color: red;
    padding: 5px;
    opacity: .7;
    color: #fff;
  }
  .columns {
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }
  .columns span {
    flex: 1;
     padding-left: 10px;
  }
   .columns span:nth-child(3) {
     text-align: center;
   }
   .mail-info {
     font-size: 14px;
     display: flex;
     /* justify-content:space-around; */
     border-top: 1px solid #ccc;
     border-bottom: 3px solid #ccc;
     height: 50px;
     line-height: 50px;
     margin-top: 10px; 
   }
   .info-service-item {
     flex:1;
     /* text-align: center; */
     padding-left: 5px;
   }
    .mail-info img {
      width: 14px;
      vertical-align: middle;
    }  
</style>