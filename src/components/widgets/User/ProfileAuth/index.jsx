import clsx from 'clsx'
import cls from './index.module.scss'
import { useState } from 'react'
import { UiTypography } from '@shared/ui/UiTypography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PROFILE_SCHEMA } from '@shared/utils/validationSchemas'
import { UiButton } from '@shared/ui/UiButton'
import { UiPasswordInput } from '@shared/ui/UiPasswordInput'
import { UiInput } from '@shared/ui/UiInput'
import { Lock, ShieldUser } from 'lucide-react'
import {
	addUserSelector,
	authorizationUserSelector,
	useAuth,
} from '@shared/store/useAuth'

const ProfileAuth = ({ className, ...props }) => {
	const addUser = useAuth(addUserSelector)
	const authorizationUser = useAuth(authorizationUserSelector)

	const {
		formState: { errors },
		handleSubmit,
		register,
		reset,
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(PROFILE_SCHEMA),
	})

	const [type, setType] = useState('login')

	return (
		<section className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='JosefinSans-R' className={cls.title}>
				{type === 'login' ? 'Вход' : 'Зарегистрироваться'}
			</UiTypography>
			<form
				className={cls.form}
				onSubmit={handleSubmit(({ name, password }) => {
					if (type === 'login') {
						authorizationUser({ name, password })
					} else {
						addUser({ name, password })
					}
				})}
			>
				<UiInput
					inputProps={{ ...register('name') }}
					label='Имя'
					icon={<ShieldUser />}
					errorMessage={errors.name?.message}
				/>
				<UiPasswordInput
					icon={<Lock />}
					inputProps={{ ...register('password') }}
					isDefaultShowPassword
					label='Пароль'
					errorMessage={errors.password?.message}
				/>
				<UiButton
					className={cls.switch_type}
					variant='ghost'
					onClick={() => {
						setType(cur => {
							if (cur === 'login') setType('registration')
							else setType('login')
						})
						reset()
					}}
				>
					<UiTypography font='Inter-R'>
						{type === 'login'
							? 'Нет аккаунта? Зарегистрироваться'
							: 'Есть аккаунт? Войти'}
					</UiTypography>
				</UiButton>

				<div className={cls.actions}>
					<UiButton
						type='submit'
						className={clsx(cls.btn)}
						disabled={
							errors.name?.message === undefined ||
							errors.password?.message === undefined
						}
					>
						<UiTypography font='JosefinSans-R'>
							{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
						</UiTypography>
					</UiButton>
				</div>
			</form>
		</section>
	)
}

export { ProfileAuth }
