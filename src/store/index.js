import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './modules'
// 内存持久化

const store = createStore({
  modules,
  plugins: [createPersistedState()]
})

export default store
