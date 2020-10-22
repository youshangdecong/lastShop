<template>
  <div id="shop-item">
    <div class="item-selector" @click="checkClick">
      <check-button :is-checked="items.checked" />
    </div>
    <div class="item-img">
      <img :src="items.image" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{items.title}}</div>
      <div class="item-desc">{{items.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{items.price | minPrice}}</div>
        <div class="item-count right">x{{items.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  props: {
    items: {
      type: Object,
      defaule() {
        return {};
      }
    },
    indexItem: {
      type: Number,
      defaule() {
        return 0;
      }
    }
  },
  components: {
    CheckButton
  },
  filters: {
    minPrice(value) {
      return value.substring(0,6)
    }
  },
  methods: {
    checkClick() {
      this.$store.commit("togglseCheck", this.indexItem);
      let cartListNew = this.$store.state.cartList.filter(n => {
        return n.checked;
      });
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>