<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="shop-body">
      <div class="shop-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shops.sells | showCount}}
          </div>
          <div class="sells-text">
            总销量
          </div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shops.goodsCount}}
          </div>
          <div class="goods-text">
            全部宝贝
          </div>
        </div>
      </div>
      <div class="shop-right">
        <div v-for="item in shops.score" :key="item.id">
          <span>{{item.name}}</span>
          <span class="green"  :class="{'red':item.isBetter}">{{item.score}}</span>
          <span class="bgc-green" :class="{'bgc-red':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>    
      </div>
    </div> 
  <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shops:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showCount(value) {
      if (value < 10000) {
        return value
      }
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style>
.detail-shop-info {
  margin: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  margin-bottom: 20px; 
}
.shop-top img {
  width: 40px;
  margin-left: 10px;
  border-radius: 50%; 
  border: 1px solid rgba(0,0,0,.1);

  vertical-align: middle;
}
.shop-top span {
  padding-left: 5px; 
}
.shop-body {
  display: flex;
}
.shop-left {
  /* flex: 50%; */
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.shop-left > div {
  flex:1;
}
.sells-count,.goods-count {
  font-size: 16px;
  font-weight: 700;
  
}
.sells-text,
.goods-text {
  margin-top: 10px; 
  font-size: 14px;
}
.info-goods {
  border-right: 1px solid pink ;
}
.shop-right {
  margin-top: -15px;
  width: 50%;
}
.shop-right div {
  /* margin-left: 20px;  */
  font-size: 14px;
  margin: 8px 20px;
  display: flex;
  text-align: left;
  justify-content: space-between;
}
.shop-right span {
  margin-right: 8px; 
  
}
.red {
  color: red !important;
}
.bgc-red {
  background-color: red !important;
  color: #fff;
}
.green {
  color: green;
}
.bgc-green {
  background-color: green ;
  color: #fff;
  padding: 1px;
}
.shop-bottom {
  margin-top: 10px; 
  text-align: center;
}
</style>