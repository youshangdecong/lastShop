<template>
  <div class="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
       <template v-slot:center >
       <div class="items">
          <div v-for="(item,index) in navList" 
          :key="item.id"
          :class="{indexColor:indexCut == index}"
          @click="clickIndex(index)">
          {{item}}
        </div>
       </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      iid:'',
      navList:['商品','参数','评论','推荐'],
      indexCut:0
    }
  },
  components:{
    NavBar 
  },
  computed: {
    
  },
  methods:{
    clickIndex(index) {
       this.indexCut = index
      this.$emit('navClick',index)
    },
    backClick() {
        this.$router.go(-1)
    }
  },
  created() {
    this.iid = this.$route.params.iid
  },
}
</script>

<style scoped>
  .detail-nav {
    border-bottom: 1px solid #ccc;
  }
  .items {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
  .back {
   padding-top: 5px;
  }
  .indexColor {
    color: blue;
  }
</style>