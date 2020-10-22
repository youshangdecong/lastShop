<template>
  <div class="good-list-item"  @click.stop="toNew">
      <img 
      :src="showImg" 
      alt="" 
      @load="imgLoad">
     <p class="info">{{items.title}}</p>
      <p class="bff">
        <span class="span-left">{{items.price}}</span>
        <span class="befor">{{items.cfav}}</span>
      </p>
  </div>
</template>

<script>
export default {
  props:{
    items:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    imgLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    toNew() {
      console.log(this.items.iid);
      
      this.$router.push('/detail/'+this.items.iid)
    }
  },
  computed: {
    showImg() {
      return this.items.image || this.items.show.img 
       return this.items.show.img  ||  this.items.image
    }
  }
}
</script>

<style>
.good-list-item {
  width: 47%;
  font-size: 12px;
  text-align: center;
}

.good-list-item img {
  width: 100%;
  border-radius: 5px;
  margin:10px 0 5px; 
}
.info {
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.bff {
  position: relative;
  display: flex;
  justify-content: space-around;
  top: 3px;
}
.befor::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 100px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
.span-left {
  color: red;
}
</style>