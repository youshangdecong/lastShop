<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{count}})</div>
      </template>
    </nav-bar>
    <scroll class="cart-scroll">
      <div>
        <cart-list ></cart-list>
      </div>
    </scroll>
    <cart-bot></cart-bot>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from '@/components/common/scroll/Scroll'
import CartList from '@/views/cart/cartChildren/CartList'
import CartBot from '@/views/cart/cartChildren/CartBot'
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBot
  },
  computed: {
    //正常写法
    // shopCount() {
    //   return this.$store.state.cartList.length
    // }
    //...mapGetters 写法
    ...mapGetters({
      count: "shopCount"
    })
  }
};
</script>

<style>
.cart-nav {
  background-color: pink;
  font-weight: 700;
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 999; */
}
.cart {
  height: 100vh;
}
.cart-scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>