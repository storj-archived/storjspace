import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import routes from './routes'
import storage from 'electron-json-storage'

Vue.use(BootstrapVue)
Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const user = storage.get('user', (err, user) => {
  if (err) return err
  return user
})

router.beforeEach((to, from, next) => {
  (to.meta.auth && !user)
    ? next({path: '/'})
    : next(true)
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
