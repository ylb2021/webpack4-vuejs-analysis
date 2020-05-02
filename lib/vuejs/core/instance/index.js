import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

//vue 基础类
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)//实例化时调用初始化方法
}

initMixin(Vue)// 在vue类原型添加_init方法，实例化时调用
stateMixin(Vue)//在vue类原型添加$watch方法，watch 组件data,props下面model
eventsMixin(Vue)//事件初始化
lifecycleMixin(Vue)//组件生命周期初始化
renderMixin(Vue)//当前vue实例添加_render,$nextTick方法

export default Vue
