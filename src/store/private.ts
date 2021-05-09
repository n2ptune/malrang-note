import { RootState } from './index'
import { Module } from 'vuex'

export interface PrivatePageModuleState {
  title: string
  created: Timestamp
}

export const privatePageModule: Module<PrivatePageModuleState, RootState> = {
  namespaced: true,
  state: {
    title: '',
    created: {
      nanoseconds: 0,
      seconds: 0
    }
  },
  mutations: {
    SET_PRIVATE_PAGE(state, payload: PrivatePageModuleState) {
      state = payload
    }
  },
  getters: {
    getPrivatePageMeta(state) {
      return state
    }
  }
}
