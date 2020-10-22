export function debaounce(fun,time) {
  let timer = null
  return function (...arg) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this,...arg)
    },time)
  }
}