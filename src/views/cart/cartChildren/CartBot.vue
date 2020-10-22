<template>
  <div class="cart-bot" >
    <div class="all" @click="AllClick">
        <check-button class="check-all" :class="{active:isAll}"/>
        <span>全选</span>
    </div>
    <div class="price">
      <span>合计</span>
      <span>{{price.toFixed(2)}}￥</span>
    </div>
    <div class="computed" @click="comp">
      <span>去计算 ({{countAll}}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  components: {
    CheckButton
  },
  data() {
   return {
     count:1
   }
  },
  computed: {
    price() {   
      return this.$store.state.cartList.filter(n => {
        return n.checked
      }).reduce((preValue,m) => {
    
          let price = m.price.substring(1,6)
               console.log(price);
               
        return preValue + price * m.count
      },0)
    },
    countAll() {
      return this.$store.state.cartList.filter(n => {
        return n.checked
      }).length
    },
     isAll() {
      if ( this.$store.state.cartList.length === 0) {
        return false
      } 
      return !(this.$store.state.cartList.filter(n => {
        return !n.checked
      }).length)
    }
  },
  methods: {
    AllClick() {
      // this.count++
      this.$store.commit('allCheck',this.isAll)
    //   if (this.isAll) {
    //      this.$store.commit('allCheck')
    //   } else {
    //      this.$store.commit('allFalseCheck')
    //   }
    // },
   
  },
  comp() {
    if (!this.countAll) {
      this.$toast.show('请选择商品',2000)
    }
  }
}
}
</script>

<style scoped>
.cart-bot {
  position: fixed;
  left: 0;
  bottom: 49px;
  width: 100%;
  height: 40px;
  display: flex;
  background-color: rgba(0, 0,0,.1)
}
.cart-bot > div {
  flex: 1;
}
.check-all {
  width: 20px;
  height: 20px;
  margin: 0 5px;
  /* flex: 1; */
}
.all {
  display: flex;
  align-items: center;
}
.price {
 line-height: 40px;
}
.price span:nth-child(2) {
  margin-left: 10px;
   font-size: 15px;
   color: red;
}
.computed {
  margin-left: 20px;
  line-height: 40px;
  text-align: center;
  background-color:tomato;
  color: #fff;
}
.active {
  background-color: red;

}
</style>