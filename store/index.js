require('dotenv').config()

export const state = () => ({
  windowWidth: 0,
  baseUrl: process.env.BASE_URL,
})

export const mutations = {
  SET_WINDOW_WIDTH(state, payload) {
    state.windowWidth = payload
  },
}

export const actions = {
  setWindowWidth({ commit }) {
    commit('SET_WINDOW_WIDTH', window.innerWidth)
  },
}

export const getters = {
  isDev: () => process.env.NODE_ENV !== 'production',
  pageTitle: () => process.env.APP_NAME || 'Hotel',
  windowWidth: (state) => state.windowWidth,
  isMobile: (state) => state.windowWidth < 992,
  baseUrl: (state) => state.baseUrl,
}
