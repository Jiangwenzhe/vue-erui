import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'

Vue.component('er-button', Button)
Vue.component('er-icon', Icon)
Vue.component('er-button-group', ButtonGroup)
Vue.component('er-input', Input)
Vue.component('er-row', Row)
Vue.component('er-col', Col)
Vue.component('er-layout', Layout)
Vue.component('er-header', Header)
Vue.component('er-content', Content)
Vue.component('er-sider', Sider)
Vue.component('er-footer', Footer)

new Vue({
  el: '#app',
  methods: {
  }
})
