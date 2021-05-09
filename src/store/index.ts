import { InjectionKey } from 'vue'
import {
  createStore,
  Store,
  useStore as baseUseStore,
  createLogger
} from 'vuex'
import { userModule, UserModuleState } from './user'
import { privatePageModule, PrivatePageModuleState } from './private'

export interface RootState {
  user: UserModuleState
  private: PrivatePageModuleState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const useStore = () => {
  return baseUseStore(key)
}

export default createStore<RootState>({
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    private: privatePageModule
  },
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : undefined
})
