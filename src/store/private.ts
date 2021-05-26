import { readPrivatePage } from '@/services/pages/read'
import { RootState } from './index'
import { Module } from 'vuex'

export interface PrivatePageModuleState {
  meta: PageMeta
  page: Partial<PageMeta>
}

export const privatePageModule: Module<PrivatePageModuleState, RootState> = {
  namespaced: true,
  state: () => ({
    meta: {
      title: '',
      created: {
        nanoseconds: 0,
        seconds: 0
      },
      uid: ''
    },
    page: {}
  }),
  mutations: {
    SET_PRIVATE_META(
      state,
      payload: PickValue<PrivatePageModuleState, 'meta'>
    ) {
      state.meta = payload
    },
    SET_PRIVATE_PAGE(
      state,
      payload: PickValue<PrivatePageModuleState, 'page'>
    ) {
      state.page = payload
    }
  },
  getters: {
    getPrivatePageMeta(state) {
      return state.meta
    },
    getPrivatePage(state) {
      return state.page
    }
  },
  actions: {
    async dispatchPrivatePage({ commit }) {
      try {
        const { meta, page } = await readPrivatePage()
        commit('SET_PRIVATE_META', meta)
        commit('SET_PRIVATE_PAGE', page)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
