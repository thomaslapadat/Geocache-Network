export const state = () => ({
	basicInfo: ["", "", "", ""],
})

export const mutations = {
	setBasicInfo(state, details) {
		state.basicInfo = details
	}
}

export const actions = {
	setBasicInfo(vuexContext, details) {
		vuexContext.commit('setBasicInfo', details)
	}
}

export const getters = {
	loadedInfo(state) {
		return state.basicInfo
	}
}
