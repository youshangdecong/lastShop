export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  togglseCheck(state, payload) {
    state.cartList[payload].checked = !state.cartList[payload].checked
  },
  allCheck(state, payload) {
    if (payload) {
      state.cartList.forEach(n => {
        n.checked = false
      });
    } else {
      state.cartList.forEach(n => {
        n.checked =  true
      });
    }
   
  }
}