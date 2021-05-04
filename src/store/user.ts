import { Module } from 'vuex'
import { RootState } from './index'
import firebase from 'firebase/app'

export interface UserModuleState {
  currentUser: firebase.User | null
  loggedIn: boolean
}

export const userModule: Module<UserModuleState, RootState> = {
  namespaced: true,
  state: () => ({
    currentUser: null,
    loggedIn: false
  }),
  mutations: {
    SET_USER(state, payload: firebase.User | null) {
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
