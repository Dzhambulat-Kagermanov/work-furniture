import { DEFAULT_DATA } from '@shared/constants/default-data'
import { STORAGE_MAIN_DATA } from '@shared/constants/localStorageKeys'
import { create } from 'zustand'

export const useMainData = create()((set, get) => ({
	data: JSON.parse(localStorage.getItem(STORAGE_MAIN_DATA)) || DEFAULT_DATA,
	currentEditItemId: null,
	addDataToSlug: ({ data: { id, name, price, type }, slug }) => {
		set(({ data }) => {
			const newData = {
				...data,
				[slug]: [...(data?.[slug] || []), { id, name, price, type }],
			}
			localStorage.setItem(STORAGE_MAIN_DATA, JSON.stringify(newData))
			return {
				data: newData,
			}
		})
	},
	removeDataToSlug: ({ id, slug }) => {
		set(({ data }) => {
			const newData = {
				...data,
				[slug]: [
					...(data?.[slug].filter(props => {
						return props.id !== id
					}) || []),
				],
			}
			localStorage.setItem(STORAGE_MAIN_DATA, JSON.stringify(newData))
			return { data: newData }
		})
	},
	editDataToSlug: ({ data: { id, name, price, type }, slug }) => {
		set(({ data }) => {
			const newData = {
				...data,
				[slug]: [
					...(data?.[slug] || []).map(props => {
						if (props.id === id) {
							return { id, name, price, type }
						}
						return props
					}),
				],
			}
			localStorage.setItem(STORAGE_MAIN_DATA, JSON.stringify(newData))
			return { data: newData }
		})
	},
	setCurrentEditItemId: ({ id }) => {
		set({
			currentEditItemId: id,
		})
	},
}))
export const dataSelector = state => state.data
export const addDataToSlugSelector = state => state.addDataToSlug
export const removeDataToSlugSelector = state => state.removeDataToSlug
export const editDataToSlugSelector = state => state.editDataToSlug
export const currentEditItemIdSelector = state => state.currentEditItemId
export const setCurrentEditItemIdSelector = state => state.setCurrentEditItemId
