const getters = {
  list(state) {
    return state.list
  },
  id(state) {
    return state.editId
  },
  data(state) {
    return state.list.find(item => item.id === state.editId) || {}
  }
}

export default getters