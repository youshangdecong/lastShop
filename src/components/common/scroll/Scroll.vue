<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null,
    }
  },
  mounted() {
    console.log('我挂在了');
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      scrollY:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动的位子
    this.scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scrollABC',position)
    })
    // 监听上拉的事件
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=300) {
      // console.log(1);
        this.scroll && this.scroll.scrollTo(x,y,time)
    },
   finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
    refresh() {
      console.log('--');
      
       this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>