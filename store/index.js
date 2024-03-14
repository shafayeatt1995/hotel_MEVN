require('dotenv').config()

export const state = () => ({
  windowWidth: 0,
  baseUrl: process.env.BASE_URL,
  darkMode: false,
})

export const mutations = {
  SET_WINDOW_WIDTH(state, payload) {
    state.windowWidth = payload
  },
  TOGGLE_DARK_MODE(state) {
    state.darkMode = !state.darkMode
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
}

export const actions = {
  setWindowWidth({ commit }) {
    commit('SET_WINDOW_WIDTH', window.innerWidth)
  },
  toggleDarkMode({ commit }) {
    commit('TOGGLE_DARK_MODE')
  },
}

export const getters = {
  isDev: () => process.env.NODE_ENV !== 'production',
  pageTitle: () => process.env.APP_NAME || 'Hotel',
  windowWidth: (state) => state.windowWidth,
  isMobile: (state) => state.windowWidth < 992,
  baseUrl: (state) => state.baseUrl,
  darkMode: (state) => state.darkMode,
}
