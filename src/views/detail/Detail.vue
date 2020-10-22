<template>
  <div id="detail">
    <detail-nav class="detail-nav" @navClick="navClick" ref="nav" />
    <scroll class="content" ref="detailScroll" :probe-type="3" @scrollABC="detailScroll">
      <detail-swiper :slideImg="slideImg" />
      <detail-good-info :goods="goods" />
      <detail-shop-info :shops="shops" />
      <detail-goods-img :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="param" :param-info="paramInfo" />
      <detail-common-info ref="recommen" :commentInfo="commentInfo" />
      <goods-list ref="goodlist" :good-list="recommends" />
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop" />
    <detail-bottom @addCart="addCart" />
  </div>
</template>

<script>
import DetailNav from "@/views/detail/detailChildren/DetailNav";
import DetailSwiper from "@/views/detail/detailChildren/DetailSwiper";
import DetailGoodInfo from "@/views/detail/detailChildren/DetailGoodInfo";
import DetailShopInfo from "@/views/detail/detailChildren/DetailShopInfo";
import DetailGoodsImg from "@/views/detail/detailChildren/DetailGoodsImg";
import DetailParamInfo from "@/views/detail/detailChildren/DetailParamInfo";
import DetailCommonInfo from "@/views/detail/detailChildren/DetailCommonInfo";
import DetailBottom from "@/views/detail/detailChildren/DetailBottom";
import goodsList from "@/components/content/goods/goodsList";
import BackTop from "components/content/backTop/BackTop";
import {mapGetters, mapActions} from 'vuex'
import {
  details,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "@/network/details.js";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailGoodInfo,
    DetailShopInfo,
    DetailGoodsImg,
    DetailParamInfo,
    DetailCommonInfo,
    DetailBottom,
    Scroll,
    goodsList,
    BackTop
  },
  data() {
    return {
      iid: null,
      slideImg: [],
      goods: {},
      shops: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      scrollTop: [],
      showBackTop: false,
      currentIndex: 0
    };
  },
  methods: {
    imgLoad() {
      this.$refs.detailScroll.refresh();
      console.log(1);
      this.scrollTop = [0];
      this.scrollTop.push(this.$refs.param.$el.offsetTop - 44);
      this.scrollTop.push(this.$refs.recommen.$el.offsetTop - 44);
      this.scrollTop.push(this.$refs.goodlist.$el.offsetTop - 44);
      this.scrollTop.push(100000);
      console.log(this.scrollTop);
    },
    ...mapActions({
      add:'addCart'
    }),
    addCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.slideImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      // product.count = 0;
      //添加
      // this.$store.cartList.push(product);
      // this.$store.commit('addCart', product);
    //   this.$store.dispatch('addCart',product).then(res => {
    //     console.log(res);
    //   }).catch(res => {
    //       console.log(res);
    //   })
      this.add(product).then(res => {
        console.log(res);
        console.log(this.$toast.$el);
        
        this.$toast.show(res,2000)
      })
    },
    backTop() {
      this.$refs.detailScroll.scrollTo(0, 0, 500);
    },
    navClick(index) {
      // console.log(index);
      this.currentIndex = index;
      this.$refs.detailScroll.scrollTo(0, -this.scrollTop[index], 200);
    },
    detailScroll(position) {
      const positiony = -position.y;
      this.showBackTop = positiony > 1000 ? true : false;

      for (let i = 0; i < this.scrollTop.length; i++) {
        if (
          this.currentIndex !== i &&
          positiony >= this.scrollTop[i] &&
          positiony <= this.scrollTop[i + 1]
        ) {
          this.currentIndex = i;
          console.log(this.currentIndex);

          this.$refs.nav.indexCut = this.currentIndex;
        }
      }
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    details(this.iid).then(res => {
      const data = res.result;
      this.slideImg = data.itemInfo.topImages;
      console.log(this.slideImg);
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shops = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  updated() {
    this.$nextTick(() => {});
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9999;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9999;
  background-color: #fff;
}
#detail .content {
  height: calc(100% - 44px - 50px);
}
</style>