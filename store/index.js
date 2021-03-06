 
import {getUserFromCookie, getUserFromSession} from '@/helpers'

export const actions = {

  async nuxtServerInit ({ dispatch }, { req }) {
    const user = getUserFromCookie(req)
    if (user) {
      await dispatch('modules/user/updateUser', user)
    }
  }
}