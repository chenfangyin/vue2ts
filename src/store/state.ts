/**
 * 单一状态树
 * vuex 操作顺序：state -> mutations-type -> mutations -> getters
 */
const state: object = {
  orgId: '1234567890',
  userInfo: {
    name: 'Ivan'
  }
}
export default state
