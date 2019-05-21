import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('er-button', Button)
Vue.component('er-icon', Icon)
Vue.component('er-button-group', ButtonGroup)
Vue.component('er-input', Input)

new Vue({
  el: '#app',
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})

// 我们来写一写单元测试吧
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect

// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'settings',
//       loading: true
//     }
//   })
//   button.$mount()
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   button.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   button.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const gbutton = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   gbutton.$mount()
//   let spy = chai.spy(function(){})
//   gbutton.$on('click', spy)
//   let button = gbutton.$el
//   button.click()
//   expect(spy).to.have.been.called()
//   gbutton.$el.remove()
//   gbutton.$destroy()
// }