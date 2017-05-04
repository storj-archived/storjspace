import * as types from '../mutation-types'
import config from '../../config'
import storage from 'electron-json-storage'
import Storj from 'vendor/storj.es5.js'
import router from '../../routes'

const storj = new Storj()
const Database = require('nedb')
const users = new Database({
  filename: config.USERS_DB,
  autoload: true
})

function registerUser () {
  const key = storj.generateKeyPair().getPrivateKey()
  const encryptionKey = storj.generateEncryptionKey()
  storage.set('keypair', {
    privkey: key,
    encryptionKey: encryptionKey
  }, (err, keypair) => {
    if (err) console.log('Error storing keypair: ', err)
    console.log('Keypair created: ', keypair)
    return keypair
  })
}

function getActiveUser () {
  return storage.get('user', (err, user) => {
    if (err) console.log(`Error getting active user ${err}`)
    console.log('getActiveUser: ', user)
    return user
  })
}

function getEmail () {
  return storage.get('user', (err, user) => {
    if (err) console.log('error getting email', err)
    return user.email
  })
}

function getKeyPair () {
  return [{
    privkey: '',
    pubkey: ''
  }]
}

const state = {
  email: getEmail(),
  user: getActiveUser(),
  keypair: getKeyPair()
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
    state.keypair = getKeyPair()
    state.email = getEmail()
    state.user = getActiveUser()
    state.authed = true
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
    console.log('Reached user module: ', user)
    commit(types.LOGIN_USER_REQUEST)

    users.findOne({ email: user.email }, (err, doc) => {
      if (err) console.log('error finding user: ', err)
      console.log('users findOne', doc)

      if (!doc) {
        users.insert(user, (err, user) => {
          if (err) console.log(`Error saving user: ${err}`)
          console.log('User added: ', user)

          const keypair = registerUser()

          console.log(keypair)
          storage.get('keypair', (err, keypair) => {
            console.log('error: ', err)
            console.log('keypair login: ', keypair)
          })

          router.push({ path: '/dashboard' })
        })
      }

      console.log('user: ', user)
      return user
    })
  },

  logout ({ commit }) {
    commit(types.LOGOUT_USER_REQUEST)
    storage.clear((err) => {
      commit(types.LOGOUT_USER_SUCCESS)
      if (err) console.log(`Error clearing storage: ${err}`)
      router.push('/')
    })
  },

  getUser ({commit}) {
    return getActiveUser()
  }
}

export default {
  state,
  actions,
  mutations
}
