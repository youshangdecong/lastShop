<template>
   <div class="control">
     <div class="control-item" 
     v-for="(item,index) in titles" 
     :key="item.id" 
     @click="controlClick(index)"
     :class="{active:cuterIndex == index}">
      <span>
           {{item}}
      </span>
     </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      cuterIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    controlClick(index) {
      this.cuterIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.control {
  display: flex;
  text-align: center;
  padding: 10px 0;
  position: sticky;
  /* top: 44px; */
}
.control-item {
  flex: 1
}
.active {
  color: red;
}
.active span {
  padding-bottom:3px; 
  border-bottom: 2px solid red;
}
</style>