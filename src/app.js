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
import Tabs from './tabs.vue'
import TabsHeader from './tabs-header.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPanel from './tabs-panel.vue'

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
Vue.component('er-tabs', Tabs)
Vue.component('er-tabs-header', TabsHeader)
Vue.component('er-tabs-body', TabsBody)
Vue.component('er-tabs-item', TabsItem)
Vue.component('er-tabs-panel', TabsPanel)

new Vue({
  el: '#app',
  data: {
    selectedTab: 'sports',
  },
  methods: {}
})
