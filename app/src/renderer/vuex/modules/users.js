import * as types from '../mutation-types'
import config from '../../config'

const storage = require('electron-json-storage')
const Database = require('nedb')
const users = new Database({
  filename: config.USERS_DB,
  autoload: true
})

const state = {
  id: '',
  email: '',
  password: '',
  uniqueHash: '',
  authed: false
}

const mutations = {
  [types.LOGIN_USER_REQUEST] (state) {
    state.loading = true
    state.authed = false
  },
  [types.LOGIN_USER_SUCCESS] (state, { basicAuth }) {
    state.basicAuth = basicAuth
    state.authed = true
    state.loading = false
  },
  [types.LOGIN_USER_FAILURE] (state, errors) {
    state.authed = false
    state.loading = false
    state.errors = errors
  }
}

const actions = {
  login ({commit}, user) {
    commit(types.LOGIN_USER_REQUEST)
    users.findOne({ email: user.email }, (err, user) => {
      if (err) console.log('error finding user: ', err)

      storage.set('user', {
        email: user.email,
        password: user.password
      })

      storage.get('user', function (err, user) {
        if (err) console.log('Error getting user after login: ', err)
        console.log('got user', user)
      })

      console.log('user: ', user)
      return user
    })
  },

  getUser ({commit, state}) {
    return storage.get('user', function (err, user) {
      if (err) return err
      return user
    })
  }
}

export default {
  state,
  actions,
  mutations
}
