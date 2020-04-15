const mutations = {
  changeData(state, params) {
    const index = state.list.findIndex(item => item.id === state.editId)
    state.list[index].data = Object.assign({}, state.list[index].data, params)
  },
  changeChoose(state, id) {
    state.editId = id
  },
  insertData(state, params) {
    state.editId = params.id
    state.list.push(params)
  },
  changeConfig(state, config) {
    const { data, name } = config
    const index = state.list.findIndex(item => item.id === state.editId)
    state.list[index].config[name] = Object.assign({}, state.list[index].config[name], data)
  }
}

export default mutations