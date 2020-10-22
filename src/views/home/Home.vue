<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
     <tab-control
          v-show="isTop" 
          ref="tabCon1" class="tab-control" 
          :titles="['新款','流行','爆款']" 
          @tabClick="tabClick">
    </tab-control>
  <scroll class="contenttt" 
          ref="scrolls"
          :probe-type='2'
          :pull-up-load="true"
          @pullingUp="loadMore"
          @scrollABC="scrollABC">
      <home-swiper :banners="banners" />
    <home-recommends :recommends="recommends" />
    <feature />
    <tab-control 
          ref="tabCon2" class="tab-control" 
          :titles="['新款','流行','爆款']" 
          @tabClick="tabClick"
          >
    </tab-control>
    <good-list :goodList="showControl" />
  </scroll>
      <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommends from "./childComps/HomeRecommends";
import Feature from "./childComps/Feature";
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import TabControl from "components/content/tabControl/TabControl";
import goodList from "components/content/goods/goodsList";
import { getHomeMultidata, getGoods } from "network/home";
import {debaounce} from 'common/debaounce'


export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    Feature,
    TabControl,
    goodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      showBackTop :'false',
      isTop:false,
      saveTop:0,
      itemImageLoadFun:null
    };
  },
 created() {
    this.getHomeMultidata();
    // this.$router.go(0)
    this.getGoodss("pop");
    this.getGoodss("new");
    this.getGoodss("sell");
  },
  async mounted() {
    const result =  debaounce(this.$refs.scrolls.refresh,200)
    this.itemImageLoadFun = () => result()
    this.$bus.$on('itemImageLoad', this.itemImageLoadFun)
    this.$refs.scrolls &&  this.$refs.scrolls.scrollTo(0,this.saveTop,100)
  },
  computed:{
    showControl() { 
       return this.goods[this.currentType].list
    }
  },
  // beforeRouterEnter(to,from,next) {
  //   this.$refs.scrolls.refresh()
  //   next()
  // },
  //进入时候设置
  activated(){

  },
  //在离开时候记录y
  deactivated() {
    this.saveTop = this.$refs.scrolls.getScrollY

    this.$bus.$off('itemImageLoad',)
  },
  methods: {
    // debounce(fun,time) {
    //     let timer = null
    //     return function() {
    //       if (timer) {
    //         clearTimeout(timer)
    //       }
    //       timer = setTimeout(()=> {
    //         fun.apply(this)
    //       },time)
    //     }
    // },
    //事件监听
    tabClick(index) {
      this.$refs.tabCon1.cuterIndex = index;
      this.$refs.tabCon2.cuterIndex = index;
      // console.log(index);
      switch (index) {
        case (index = 0):
          this.currentType = "pop";
          break;
        case (index = 1):
          this.currentType = "new";
          break;
        case (index = 2):
          this.currentType = "sell";
          break;

        default:
          break;
      }
    },
    backTop() {
      this.$refs.scrolls.scrollTo(0,0,500)
      
    },
    scrollABC(position){
      this.showBackTop = Math.abs(position.y) > 1000? true:false
      this.isTop = Math.abs(position.y) > this.$refs.tabCon2.$el.offsetTop? true:false
    },
    loadMore() {
        this.$refs.scrolls.finishPullUp()
      this.getGoodss(this.currentType)
      // console.log('w ');
    
    },
    //网络请求
      getHomeMultidata() {
         getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodss(type) {
      let page = this.goods[type].page + 1;
      console.log(page);

      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scrolls.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: pink;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; */
}
.tab-control {
  background-color: #eee;
  z-index: 9;
  position: relative;
}
.contenttt {
  /* height:  calc(100vh - 93px);
  overflow: hidden; */
   overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>