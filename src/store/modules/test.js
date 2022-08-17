const state = {
  count: 10
}

const mutations = {
  SET_COUNT(state, count) {
    state.count = count
  }
}

const actions = {
  set_count({ commit }, count) {
    commit('SET_COUNT', count)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
