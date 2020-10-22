<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-hd">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多
        <i></i>
      </div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-bd">
      <p>{{commentInfo.content}}</p>
       <div class="comment-other">
        <span class="comment-date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {formDate} from 'common/utils.js'
export default {

  props: {
    commentInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      let date = new Date(value*1000)
      return formDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style>
.comment-info {
  margin: 0 10px;
}
.comment-hd {
  height: 50px;
  margin: 20px 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
}
.header-title {
  float:left
}
.header-more {
  float: right;
  font-size: 12px;
  padding-right: 15px; 
}
.comment-user {
  height: 40px;
}
.comment-user img {
  height: 100%;
  vertical-align: middle;
  border-radius: 50%;
}
.comment-user span {
  margin-left: 10px;
}
.comment-bd p {
  margin: 8px 0;
  font-size: 16px;
}
.comment-other {
  font-size: 14px;
  color: #ccc;
  margin: 8px 0;
}
.comment-imgs img {
  width: 120px;
}
</style>