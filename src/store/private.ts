import { RootState } from './index'
import { Module } from 'vuex'

export interface PrivatePageModuleState {
  meta: PageMeta
}

export const privatePageModule: Module<PrivatePageModuleState, RootState> = {
  namespaced: true,
  state: {
    meta: {
      title: '',
      created: {
        nanoseconds: 0,
        seconds: 0
      },
      uid: ''
    }
  },
  mutations: {
    SET_PRIVATE_PAGE(state, payload: PageMeta) {
      state.meta.title = payload.title
      state.meta.created = payload.created
      state.meta.uid = payload.uid
    }
  },
  getters: {
    getPrivatePageMeta(state) {
      return state
    }
  }
}
