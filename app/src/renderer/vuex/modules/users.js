import * as types from '../mutation-types'
import config from '../../config'
import storage from 'electron-json-storage'

const Database = require('nedb')
const users = new Database({
  filename: config.USERS_DB,
  autoload: true
})

function getActiveUser () {
  return storage.get('user', (err, user) => {
    if (err) console.log(`Error getting active user ${err}`)
    return user
  })
}

function getEmail () {
  return storage.get('user', (err, user) => {
    if (err) return null
    console.log(user)
    return user
  })
}

const state = {
  id: '',
  email: getEmail(),
  user: getActiveUser(),
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
  },
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.LOGOUT_USER_REQUEST] (state) {
    state.loading = true
  },
  [types.LOGOUT_USER_SUCCESS] (state) {
    state.user = null
    state.loading = false
    state.success = true
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

      console.log('user: ', user)
      return user
    })
  },

  logout ({ commit }) {
    commit(types.LOGOUT_USER_REQUEST)
    storage.clear((err) => {
      commit(types.LOGOUT_USER_SUCCESS)
      if (err) console.log(`Error clearing storage: ${err}`)
    })
  },

  getUser ({commit}) {
    const user = getActiveUser()
    commit(types.SET_USER, user)
    return user
  }
}

export default {
  state,
  actions,
  mutations
}
