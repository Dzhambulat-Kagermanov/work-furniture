import * as Yup from 'yup'

export const PROFILE_SCHEMA = Yup.object().shape({
	name: Yup.string()
		.required('Введите имя оно обязательно')
		.min(2, 'Имя слишком короткое, минимум 2 символа')
		.max(14, 'Имя слишком длинное, максимум 14 символов'),
	password: Yup.string()
		.required('Введите пароль он обязателен')
		.min(8, 'Пароль слишком короткий, минимум 8 символов'),
})

export const ADMIN_CATALOG_ADD_SCHEMA = Yup.object().shape({
	name: Yup.string()
		.required('Введите имя оно обязательно')
		.min(2, 'Имя слишком короткое, минимум 2 символа')
		.max(14, 'Имя слишком длинное, максимум 14 символов'),
	price: Yup.string().required('Введите цену она обязательна'),
})
