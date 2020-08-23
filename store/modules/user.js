import { auth } from '@/plugins/firebase'
import Cookies from 'js-cookie'

export const state = () => ({
  user: null
})

export const getters = {
  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    // Reminder: !! gets the truthy value
    return !!state.user
  }
}

export const actions = {
  async login({ dispatch, state }, user) {
    console.log('[STORE ACTIONS] - login')
    
    // Get the token, save it in a cookie on browser
    const token = await auth.currentUser.getIdToken(true)
    Cookies.set('access_token', token)

    dispatch('updateUser', user)
    this.$router.push("/map");
  },

  async logout({ commit, dispatch }) {
    console.log('[STORE ACTIONS] - logout')
    await auth.signOut()
    Cookies.remove('access_token');
    commit('setUser', null)
  },

  updateUser({ commit }, user) {
    console.log('[STORE ACTIONS] - commit setUser mutation')
    commit('setUser', user)
  }
}

export const mutations = {
  setUser(state, user) {
    console.log('[STORE MUTATIONS] - setUser:', user)
    // If user is being set to null
    if (!user) {
      state.user = user
    } else {
      // Fetched UID is returned differently depending on
      // whether the user object was retrieved from the 
      // Firebase Auth API or cookie
      let uid = (user.user_id) ? user.user_id : uid = user.uid
      state.user = {
        uid: uid,
        email: user.email
      }
    console.log('[STORE MUTATIONS] - user set to:' + JSON.stringify(state.user))
    }
  }
}