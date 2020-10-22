<template>
  <div>
    <cart-list-item v-for="(item,index) in list" 
                    :key="item.id"
                    :items="item"
                    :index-item="index"/>
    
  </div>
</template>

<script>
import CartListItem from '@/views/cart/cartChildren/CartListItem'
import {mapGetters} from 'vuex'
export default {
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters({list:'cartList'})
  }
}
</script>

<style>

</style>