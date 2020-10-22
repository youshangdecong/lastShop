export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload.count++;
      let product = context.state.cartList.find((n) => {
        return n.iid === payload.iid
         })
         if (product) {
          // product.count +=1
           context.commit('addCounter', product)
           resolve('商品数量加1')
         } else {
          payload.count = 1
          // state.cartList.push(payload)
           context.commit('addToCart', payload)
           resolve('成功添加入购物车')
         }
    })
  } 
}