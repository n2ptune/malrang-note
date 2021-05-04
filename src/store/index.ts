import { InjectionKey } from 'vue'
import {
  createStore,
  Store,
  useStore as baseUseStore,
  createLogger
} from 'vuex'
import { userModule, UserModuleState } from './user'

export interface RootState {
  user: UserModuleState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const useStore: () => ReturnType<typeof baseUseStore> = () => {
  return baseUseStore(key)
}

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    user: userModule
  },
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : undefined
})
