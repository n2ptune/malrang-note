import { Module } from 'vuex'
import { RootState } from './index'

export interface UserModuleState {
  name: string
  email: string
  loggedIn: boolean
}

export const userModule: Module<UserModuleState, RootState> = {
  namespaced: true,
  state: () => ({
    name: '',
    email: '',
    loggedIn: false
  }),
  mutations: {
    SET_NAME(state) {
      state.name = 'test'
    },
    SET_USER(state, payload: Pick<UserModuleState, 'email' | 'name'>) {
      state.name = payload.name
      state.email = payload.email
      state.loggedIn = true
    }
  },
  getters: {
    getName(state) {
      return state.name
    },
    getEmail(state) {
      return state.email
    }
  }
}
