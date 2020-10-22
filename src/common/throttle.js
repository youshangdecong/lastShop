export function throttle(fun,time) {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fun.apply(this)
      flag = true
    },time) 
  }
}