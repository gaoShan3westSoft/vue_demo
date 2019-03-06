// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'iview/dist/styles/iview.css'

import {Button, Table, Layout, Menu, MenuItem, Icon, Breadcrumb, BreadcrumbItem, Card, Row, Col, Form, FormItem, Input} from 'iview'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Layout', Layout)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Card', Card)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
