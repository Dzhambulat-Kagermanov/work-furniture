import { STORAGE_AUTH_KEY } from '@shared/constants/localStorageKeys'
import { create } from 'zustand'

export const useAuth = create()((set, get) => ({
	session: null,
	users: localStorage.getItem(STORAGE_AUTH_KEY) || [],
	addUser: ({ name, password }) => {
		set(({ users }) => {
			return {
				users: [...users, { name, password }],
			}
		})
		localStorage.setItem(STORAGE_AUTH_KEY, [...users, { name, password }])
	},
	removeUser: ({ name, password }) => {
		set(({ users }) => {
			const data = users.filter(props => {
				if (props.name === name && props.password === password) {
					return false
				}
				return true
			})

			if (data.length !== users.length) {
				localStorage.setItem(STORAGE_AUTH_KEY, data)
				get().unAuthorizationUser({ skip })
			}

			return {
				users: data,
			}
		})
	},
	unAuthorizationUser: ({ skip }) => {
		const session = get().session

		if (session || !skip) {
			const isValid =
				users.find(props => {
					if (
						props.name === session.name &&
						props.password === session.password
					) {
						return true
					}
				}) !== undefined

			return isValid
				? {
						session: null,
				  }
				: undefined
		}
	},
	authorizationUser: ({ name, password }) => {
		set(({ users }) => {
			const isValid =
				users.find(props => {
					if (props.name === name && props.password === password) {
						return true
					}
				}) !== undefined

			return {
				session: isValid ? { name, password } : null,
			}
		})
	},
	editUser: ({ name, password }) => {
		set(({ users }) => {
			const session = get().session
			let isFinding = false
			let editedUsers

			if (session) {
				editedUsers = users.map(props => {
					if (
						props.name === session.name &&
						props.password === session.password
					) {
						isFinding = true
						return {
							name,
							password,
						}
					}
				})
			}

			if (isFinding && editedUsers !== undefined) {
				localStorage.setItem(STORAGE_AUTH_KEY, editedUsers)
				return {
					users: editedUsers,
				}
			}
		})
	},
}))

export const sessionSelector = state => state.session
export const usersSelector = state => state.users
export const addUserSelector = state => state.addUser
export const removeUserSelector = state => state.removeUser
export const authorizationUserSelector = state => state.authorizationUser
export const unAuthorizationUserSelector = state => state.unAuthorizationUser
export const editUserSelector = state => state.editUser
