import * as types from './mutations-type'
import http from '../request'

const getLoginInfo = async ({ commit, state }) => {
  const role = sessionStorage.getItem('role') || 'parent'
  const code = sessionStorage.getItem('code') || '736526'
  const res = await http.login({
    type: 'php',
    role,
    code,
  })
  if (res.status === 200) {
    const { message } = res
    commit(types.SET_USERINFO, message)
  }
}

export default { getLoginInfo }
