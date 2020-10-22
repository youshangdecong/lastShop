import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  // 1创建组件构造器
  const ToastContrustor = Vue.extend(Toast)
  // 2 创建组件对象
  const toast = new ToastContrustor()
  //3 酱组件对象，手动挂摘到一个元素上
  toast.$mount(document.createElement('div'))
  //4 toast.$el 对应的就说div
  
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
  
