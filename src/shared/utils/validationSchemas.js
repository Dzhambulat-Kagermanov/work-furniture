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
	image: Yup.string()
		.required('Ссылка на картинку обязательна')
		.test(
			'is-valid-url-or-path',
			'Введите корректную ссылку или путь к изображению',
			value => {
				if (Yup.string().url().isValidSync(value)) {
					return true
				}

				const pathRegex = /^(\.{0,2}\/)?[a-z0-9\-_\/]+(\.[a-z]+)?$/i
				return pathRegex.test(value)
			}
		),
})
export const HOME_STAGES_WORK_CONSULTATION_SCHEMA = Yup.object().shape({
	firstName: Yup.string()
		.required('Имя обязательно для заполнения')
		.min(2, 'Имя должно содержать минимум 2 символа')
		.max(14, 'Имя не должно превышать 14 символов')
		.matches(
			/^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
			'Имя может содержать только буквы и дефисы'
		),
	lastName: Yup.string()
		.required('Фамилия обязательна для заполнения')
		.min(2, 'Фамилия должна содержать минимум 2 символа')
		.max(14, 'Фамилия не должна превышать 14 символов')
		.matches(
			/^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
			'Фамилия может содержать только буквы и дефисы'
		),
	email: Yup.string()
		.required('Email обязателен для заполнения')
		.email('Введите корректный email')
		.max(100, 'Email не должен превышать 100 символов'),
	description: Yup.string().optional('Описание обязательно для заполнения'),
})
