/**
 * 实际list内数据样式
 * {
 *  type: String,
 *  data: Object,
 *  config: Object,
 *  id: Number || String
 * }
 */
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const print = {
  namespaced: true,
  state: {
    list: [],
    editId: null
  },
  getters,
  mutations,
  actions
}

export default print