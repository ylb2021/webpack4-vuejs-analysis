// import Vue from 'vue'
import Vue from "web/entry-runtime"// 源文件入口文件
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
