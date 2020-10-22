<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      // message: {
      //   type: String,
      //   default: '',
      // },
      // show: {
      //   type: Boolean,
      //   default: false,
      // }
    },
    data() {
      return {
        message: '',
        isShow: false,
      }
    },
    methods: {
      show(message='默认文字', time=2000) {
        console.log(message,time);
        
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, time)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    padding: 8px 10px;

    z-index: 999999999;

    color: #fff;
    background-color:chocolate;
  }
</style>