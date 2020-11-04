import * as types from './mutations-type'

export default {
  [types.SET_USERINFO](state: any, obj: object = {}) {
    state.userInfo = obj
  }
}
