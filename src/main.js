// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入全局的sass文件 注意，因为webpack里一切皆模块，我们引入来之后，webpack会编译一下再拿出去
import './stylesheets/main.scss'

// 引入animate.css
//import 'animate.css'

//axios
import axios from 'axios'
// 将axios放入到Vue的原型上之后，因为组件其实是Vue的子类，所以会继承Vue原型上的东西，对于组件实例来说，可以通过this.$http直接使用
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
