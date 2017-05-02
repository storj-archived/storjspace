import * as types from '../mutation-types'
import Storj from 'vendor/storj.es5.js'
import config from '../../config'
const storage = require('electron-json-storage')
const storj = new Storj(config)

const keypair = storj.generateKeyPair()
const key = storj.generateKeyPair().getPrivateKey()
const encryptionKey = storj.generateEncryptionKey()

console.log('key', key)
console.log('keypair', keypair)
console.log('encryptionKey', encryptionKey)

const state = {
  id: '',
  email: '',
  authed: false,
  privkey: '',
  pubkey: '',
  keyList: [],
  basicAuth: {},
  keyPair: {}
}

const mutations = {
  [types.LOGIN_USER_REQUEST] (state, { basicAuth }) {
    state.basicAuth = basicAuth
  }
}

const actions = {
  setBasicAuth ({commit}, basicAuth) {
    storage.set('basicAuth', {
      email: basicAuth.email,
      password: basicAuth.password
    })
  },

  registerKey ({commit}) {
    storj.registerKey(keypair.getPublicKey(), function (err) {
      if (err) {
        return err
      }
    })
  }
}

export default {
  state,
  actions,
  mutations
}
