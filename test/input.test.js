const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(function() {
      vm.$destroy()
    })

    it('接受 value', () => {
      // const Constructor = Vue.extend(Input)
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('1234')
      vm.$destroy()
    })

    it('接受 disabled', () => {
      // const Constructor = Vue.extend(Input)
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
      vm.$destroy()
    })

    it('接受 readonly', () => {
      // const Constructor = Vue.extend(Input)
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
      vm.$destroy()
    })

    it('接受 error', () => {
      // const Constructor = Vue.extend(Input)
      vm = new Constructor({
        propsData: {
          error: 'wrong'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      // 测试icon
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
      const errorMsg = vm.$el.querySelector('.error-message')
      expect(errorMsg.innerText).to.eq('wrong')
      vm.$destroy()
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(function() {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发 change 事件
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {value: {value: 'hello_world'},enumerable: true})
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hello_world')
      })
    })
  })
})