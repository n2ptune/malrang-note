import { createStore } from 'vuex'
import { userModule, UserModuleState } from './user'

export interface RootState {
  user: UserModuleState
}

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    user: userModule
  }
})
