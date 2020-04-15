const actions = {
  changeData({ commit }, data) {
    commit('changeData', data)
  },
  changeChoose({ commit }, id) {
    commit('changeChoose', id)
  },
  insertData({ commit }, params) {
    commit('insertData', params)
  },
  changeConfig({ commit }, config) {
    commit('changeConfig', config)
  }
}

export default actions