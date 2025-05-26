import { STORAGE_CART_DATA } from '@shared/constants/localStorageKeys'
import { create } from 'zustand'
import { useMainData } from './useMainData'
import { devtools } from 'zustand/middleware'

export const useCart = create()(
	devtools((set, get) => ({
		cart: JSON.parse(localStorage.getItem(STORAGE_CART_DATA)) || {},
		addCartItem: ({ name, id, slug }) => {
			set(({ cart }) => {
				const mainData = (useMainData.getState().data?.[slug] || []).find(
					props => props.id === id
				)
				if (!mainData) return { cart }

				const currentItems = cart[name] || []
				const itemIndexInCart = currentItems.findIndex(item => item.id === id)

				let updatedItems
				if (itemIndexInCart !== -1) {
					updatedItems = [...currentItems]
					updatedItems[itemIndexInCart] = {
						...updatedItems[itemIndexInCart],
						qnt: updatedItems[itemIndexInCart].qnt + 1,
						slug,
					}
				} else {
					updatedItems = [...currentItems, { ...mainData, qnt: 1, slug }]
				}
				console.log(updatedItems)

				const newCart = {
					...cart,
					[name]: updatedItems,
				}

				localStorage.setItem(STORAGE_CART_DATA, JSON.stringify(newCart))
				return { cart: newCart }
			})
		},
		deleteCartItem: ({ name, id, slug }) => {
			set(({ cart }) => {
				const currentItems = cart[name] || []
				const itemIndexInCart = currentItems.findIndex(item => item.id === id)

				if (itemIndexInCart === -1) return { cart }

				const item = currentItems[itemIndexInCart]
				let updatedItems

				if (item.qnt <= 1) {
					updatedItems = currentItems.filter(
						(_, index) => index !== itemIndexInCart
					)
				} else {
					updatedItems = [...currentItems]
					updatedItems[itemIndexInCart] = {
						...item,
						qnt: item.qnt - 1,
						slug,
					}
				}

				const newCart = {
					...cart,
					[name]: updatedItems,
				}

				localStorage.setItem(STORAGE_CART_DATA, JSON.stringify(newCart))
				return { cart: newCart }
			})
		},
		getItemQnt: ({ name, id }) => {
			return (get().cart?.[name] || []).find(props => props.id === id)?.qnt
		},
		cartHasItem: ({ name, id }) => {
			return (get().cart?.[name] || []).some(props => props.id === id)
		},
		resetCartItem: ({ name, id }) => {
			set(({ cart }) => {
				const currentItems = cart[name] || []
				const updatedItems = currentItems.filter(item => item.id !== id)

				const newCart = {
					...cart,
					[name]: updatedItems,
				}

				localStorage.setItem(STORAGE_CART_DATA, JSON.stringify(newCart))
				return { cart: newCart }
			})
		},
		getItemQnt: ({ name, id }) => {
			return (get().cart?.[name] || []).find(props => props.id === id)?.qnt
		},
		cartHasItem: ({ name, id }) => {
			return (get().cart?.[name] || []).some(props => props.id === id)
		},
		clearCartItems: name => {
			set(({ cart }) => {
				const newCart = { ...cart }
				delete newCart[name] //

				localStorage.setItem(STORAGE_CART_DATA, JSON.stringify(newCart))
				return { cart: newCart }
			})
		},
		getItemQnt: ({ name, id }) => {
			return (get().cart?.[name] || []).find(props => props.id === id)?.qnt
		},
		cartHasItem: ({ name, id }) => {
			return (get().cart?.[name] || []).some(props => props.id === id)
		},
	}))
)

export const cartSelector = state => state.cart
export const addCartItemSelector = state => state.addCartItem
export const deleteCartItemSelector = state => state.deleteCartItem
export const getItemQntSelector = state => state.getItemQnt
export const cartHasItemSelector = state => state.cartHasItem
export const resetCartItemSelector = state => state.resetCartItem
export const clearCartItemsSelector = state => state.clearCartItems
