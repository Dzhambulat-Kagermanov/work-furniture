import { create } from 'zustand'

export const useModals = create()((set, get) => ({
	modalsStates: {},
	hideModal: ({ slug }) => {
		set(state => ({
			modalsStates: {
				...state.modalsStates,
				[slug]: { ...state.modalsStates[slug], visibleState: false },
			},
		}))
		const unmountStateTimerId = setTimeout(() => {
			set(state => ({
				modalsStates: {
					...state.modalsStates,
					[slug]: { ...state.modalsStates[slug], mountedState: false },
				},
			}))
			set(state => ({
				modalsStates: {
					...state.modalsStates,
					[slug]: {
						...state.modalsStates[slug],
						unmountStateTimerId: undefined,
					},
				},
			}))
		}, get().modalsStates[slug].unmountDelay || 0)
		set(state => ({
			modalsStates: {
				...state.modalsStates,
				[slug]: { ...state.modalsStates[slug], unmountStateTimerId },
			},
		}))
	},
	showModal: ({ slug }) => {
		const unmountStateTimerId = get().modalsStates[slug]?.unmountStateTimerId
		if (unmountStateTimerId !== undefined) {
			clearTimeout(unmountStateTimerId)
			set(state => ({
				modalsStates: {
					...state.modalsStates,
					[slug]: {
						...state.modalsStates[slug],
						unmountStateTimerId: undefined,
					},
				},
			}))
		}
		setTimeout(() => {
			set(state => ({
				modalsStates: {
					...state.modalsStates,
					[slug]: { ...state.modalsStates[slug], visibleState: true },
				},
			}))
		}, 0)
		set(state => ({
			modalsStates: {
				...state.modalsStates,
				[slug]: { ...state.modalsStates[slug], mountedState: true },
			},
		}))
	},
	toggleModal: ({ slug }) => {
		const state = get().modalsStates[slug]?.visibleState

		if (state) {
			get().hideModal({ slug })
		} else {
			get().showModal({ slug })
		}
	},
	changeUnmountDelay: ({ unmountDelay, slug }) => {
		set(state => ({
			modalsStates: {
				...state.modalsStates,
				[slug]: { ...state.modalsStates[slug], unmountDelay },
			},
		}))
	},
}))

const modalsStatesSelector = state => state.modalsStates
const showModalSelector = state => state.showModal
const hideModalSelector = state => state.hideModal
const toggleModalSelector = state => state.toggleModal
const changeUnmountDelaySelector = state => state.changeUnmountDelay

export {
	modalsStatesSelector,
	showModalSelector,
	hideModalSelector,
	toggleModalSelector,
	changeUnmountDelaySelector,
}
