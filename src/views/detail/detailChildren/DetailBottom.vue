<template>
  <div class="detail-bottom">
    <div class="detail-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
       <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
       <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="detail-right">
      <div class="cart" @click="shopClick">加入购物车</div>
      <div class="buy" >购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    shopClick() {
        this.$emit('addCart')
    },
   
  },

}
</script>

<style scoped>
.detail-bottom {
  border-top: 1px solid #ccc;
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: #fff;
}
.detail-left {
  display: flex;
  flex: 50%
}
.detail-left  div {
  flex: 1;
  text-align: center;
  font-size: 12px;
  flex-direction:column;
}
.detail-left .icon {
    display: block;
    width: 23px;
    height: 23px;
    margin: 5px auto 4px;
    background: url("~assets/img/detail/detail_bottom.png");
    background-size: cover;
  }

.detail-left .service {
    background-position: 0 -54px;
  }

.detail-left .shop {
    background-position: 0 -98px;
    margin: 1px auto 6px;
  }

.detail-right {
  flex: 50%;
  display: flex
}
.detail-right div {
  flex: 1;
  text-align: center;
  line-height: 49px;
}
.cart {
  background-color: greenyellow;
}
.buy {
  background-color: red;
  opacity: .6;
    color: #fff;
}
</style>