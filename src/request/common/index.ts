/**
 * common模块
 */
import http from '../http'
import Qs from 'qs'

// 登入
const login = (params: object | undefined | null) =>
  http.post('/threelogin', Qs.stringify(params)).then((res) => res.data)

export default {
  login
}
