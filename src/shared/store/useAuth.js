import { ADMIN_USER } from '@shared/constants/env'
import {
	STORAGE_USERS_AUTH_KEY,
	STORAGE_SESSION_AUTH_KEY,
} from '@shared/constants/localStorageKeys'
import { create } from 'zustand'

export const useAuth = create()((set, get) => ({
	isAdmin:
		JSON.parse(localStorage.getItem(STORAGE_SESSION_AUTH_KEY)) !== null
			? JSON.parse(localStorage.getItem(STORAGE_SESSION_AUTH_KEY))?.name ===
					ADMIN_USER.name &&
			  JSON.parse(localStorage.getItem(STORAGE_SESSION_AUTH_KEY))?.password ===
					ADMIN_USER.password
			: false,
	session: JSON.parse(localStorage.getItem(STORAGE_SESSION_AUTH_KEY)),
	users: JSON.parse(localStorage.getItem(STORAGE_USERS_AUTH_KEY)) || [
		ADMIN_USER,
	],
	addUser: ({ name, password }) => {
		set(({ users }) => {
			const hasUser = users.find(props => {
				return props.name === name
			})
			if (hasUser) {
				alert('Такой пользователь уже существует')
			} else {
				localStorage.setItem(
					STORAGE_USERS_AUTH_KEY,
					JSON.stringify([...users, { name, password }])
				)
				localStorage.setItem(
					STORAGE_SESSION_AUTH_KEY,
					JSON.stringify({ name, password })
				)
				if (name === ADMIN_USER.name && password === ADMIN_USER.password) {
					get().setIsAdmin(true)
				} else {
					get().setIsAdmin(false)
				}

				return {
					users: [...users, { name, password }],
					session: { name, password },
				}
			}
		})
	},
	removeUser: ({ name, password }) => {
		set(({ users }) => {
			const updatedUsers = users.filter(props => {
				if (props.name === name && props.password === password) {
					return false
				}
				return true
			})

			if (updatedUsers.length !== users.length) {
				localStorage.setItem(
					STORAGE_USERS_AUTH_KEY,
					JSON.stringify(updatedUsers)
				)
				if (name === ADMIN_USER.name && password === ADMIN_USER.password) {
					get().setIsAdmin(false)
				}
				get().unAuthorizationUser({ skip: true })
			}

			return {
				users: updatedUsers,
			}
		})
	},
	unAuthorizationUser: props => {
		const session = get().session

		set(({ users }) => {
			if (session || !props?.skip) {
				const isValid =
					users.find(props => {
						if (
							props.name === session.name &&
							props.password === session.password
						) {
							return true
						}
					}) !== undefined

				if (isValid) {
					if (
						session.name === ADMIN_USER.name &&
						session.password === ADMIN_USER.password
					) {
						get().setIsAdmin(false)
					}
					localStorage.removeItem(STORAGE_SESSION_AUTH_KEY)
				}

				return isValid
					? {
							session: null,
					  }
					: undefined
			}
		})
	},
	authorizationUser: ({ name, password }) => {
		set(({ users }) => {
			const isValid =
				users.find(props => {
					if (props.name === name && props.password === password) {
						return true
					}
				}) !== undefined

			if (isValid) {
				localStorage.setItem(
					STORAGE_SESSION_AUTH_KEY,
					JSON.stringify({ name, password })
				)
				if (name === ADMIN_USER.name && password === ADMIN_USER.password) {
					get().setIsAdmin(true)
				} else {
					get().setIsAdmin(false)
				}
			}

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
				localStorage.setItem(
					STORAGE_USERS_AUTH_KEY,
					JSON.stringify(editedUsers)
				)
				localStorage.setItem(
					STORAGE_SESSION_AUTH_KEY,
					JSON.stringify({ name, password })
				)
				return {
					users: editedUsers,
					session: { name, password },
				}
			}
		})
	},
	setIsAdmin: value => {
		set(() => {
			return {
				isAdmin: value,
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
export const isAdminSelector = state => state.isAdmin
