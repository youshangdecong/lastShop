<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="cima" v-for="table in paramInfo.sizes" :key=table.id>
      <tr v-for="tr in table" :key="tr.id" class="cima-tr" >
        <td  class="cima-tr-td" v-for="td in tr" :key=td.id>{{td}}</td>
      </tr>
    </table>
     <table class="info-param">
      <tr v-for="info in paramInfo.infos" :key="info.id">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramInfo: {
      type:Object,
      default() {
        return {}
      }    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  border-collapse: collapse;
  font-size: 14px;
}
.cima-tr {
  height: 42px;
  line-height: 42px;
}
.cima-tr-td {
  margin-left: 25px;
  width: 80px;
  border-bottom: 1px solid pink; 
}
.info-param {
  margin-top: 20px;
}
.info-param td {
 border-bottom: 1px solid rgba(0,0,0,.1);
  height: 42px;
}
.info-param-key {
  width:90px;
}
.param-value {
    color: #eb4868;
    width: calc(100vh - 90px);
    padding-left: 20px; 
  }
 .info-img img {
    width: 100%;
  }
</style>