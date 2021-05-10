import { Module } from 'vuex'
import { RootState } from './index'

export interface SharedPageModuleState {
  meta: PageMeta[]
}

export const sharedPageModule: Module<SharedPageModuleState, RootState> = {
  state: {
    meta: []
  },
  mutations: {
    SET_PAGE_META(state, payload: PageMeta[]) {
      state.meta = payload
    }
  },
  getters: {
    getPageMeta(state) {
      return state.meta
    }
  }
}
