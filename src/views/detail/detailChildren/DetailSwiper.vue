<template>
  <swiper class="detail-img">
    <swiper-item v-for="item in slideImg" :key="item.id">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  props:{
    slideImg:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-img {
  height: 300px;
  overflow: hidden;
}

</style>