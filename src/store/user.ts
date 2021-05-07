import { Module } from 'vuex'
import { RootState } from './index'
import type { User } from 'firebase/auth'

export interface UserModuleState {
  currentUser: User | null
  loggedIn: boolean
}

export type CurrentUser = User

export const userModule: Module<UserModuleState, RootState> = {
  namespaced: true,
  state: () => ({
    currentUser: null,
    loggedIn: false
  }),
  mutations: {
    SET_USER(state, payload: User | null) {
      state.currentUser = payload
      state.loggedIn = !!payload
    }
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getLoggedIn(state) {
      return state.loggedIn
    }
  }
}
