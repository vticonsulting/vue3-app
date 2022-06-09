import axios from 'axios'
export const namespaced = true

export const state = {
  user: null,
  error: null,
}

export const getters = {
  loggedIn: state => !!state.user,
  userTypes: state =>
    state.user && state.user.user_types ? state.user.user_types : [],
}

export const mutations = {
  SAVE_TOKEN(state, token) {
    state.token = token
  },

  SET_USER_DATA(state, userData) {
    state.user = userData

    localStorage.setItem('loggedIn', 'true')
  },

  LOGOUT(state) {
    state.user = null

    localStorage.removeItem('loggedIn')
  },
}

export const actions = {
  async logout({ commit }) {
    try {
      await axios.get('/api/logout')
      commit('LOGOUT')
    }
    catch (error) {
      commit('SET_ERROR', error)
    }
  },

  async fetchUser({ commit }) {
    return axios
      .get('/api/user')
      .then((response) => {
        commit('SET_USER_DATA', response.data)
      })
      .catch((error) => {
        if (error.response.status === 401)
          commit('SET_USER_DATA', null)
      })
  },
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
}
