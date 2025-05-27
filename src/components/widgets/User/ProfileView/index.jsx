import clsx from 'clsx'
import cls from './index.module.scss'
import { UiInput } from '@shared/ui/UiInput'
import { Lock, ShieldUser } from 'lucide-react'
import { UiPasswordInput } from '@shared/ui/UiPasswordInput'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import {
	editUserSelector,
	isAdminSelector,
	removeUserSelector,
	unAuthorizationUserSelector,
	useAuth,
} from '@shared/store/useAuth'
import { PROFILE_SCHEMA } from '@shared/utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ROUTES } from '@shared/constants/routes'
import { useNavigate } from 'react-router-dom'

const ProfileView = ({ className, session: { name, password }, ...props }) => {
	const isAdmin = useAuth(isAdminSelector)
	const removeUser = useAuth(removeUserSelector)
	const unAuthorizationUser = useAuth(unAuthorizationUserSelector)
	const editUser = useAuth(editUserSelector)

	const navigate = useNavigate()

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(PROFILE_SCHEMA),
		defaultValues: {
			name,
			password,
		},
	})

	return (
		<section className={clsx(cls.wrapper, className)} {...props}>
			<div className={cls.header}>
				<UiTypography font='Montserrat-R' className={cls.title}>
					Ваш профиль
				</UiTypography>
				{isAdmin ? (
					<UiButton
						className={cls.admin_open_btn}
						onClick={() => {
							navigate(ROUTES.ADMIN.HOME)
						}}
					>
						<UiTypography font='Montserrat-R'>
							Войти в админ панель
						</UiTypography>
					</UiButton>
				) : null}
			</div>
			<form
				className={cls.form}
				onSubmit={handleSubmit(({ name, password }) => {
					editUser({ name, password })
				})}
			>
				<UiInput
					inputProps={{ ...register('name'), disabled: isAdmin }}
					label='Имя'
					icon={<ShieldUser />}
					errorMessage={errors.name?.message}
				/>
				<UiPasswordInput
					icon={<Lock />}
					isDefaultShowPassword={false}
					inputProps={{ ...register('password'), disabled: isAdmin }}
					label='Пароль'
					errorMessage={errors.password?.message}
				/>
				<div className={cls.actions}>
					<UiButton type='submit' className={clsx(cls.btn)} disabled={isAdmin}>
						<UiTypography font='Montserrat-R'>Сохранить</UiTypography>
					</UiButton>
					<UiButton
						onClick={() => {
							unAuthorizationUser()
						}}
						variant='danger'
						font='Montserrat-R'
						className={clsx(cls.btn)}
					>
						<UiTypography font='Montserrat-R'>Выйти</UiTypography>
					</UiButton>
					<UiButton
						variant='danger'
						className={clsx(cls.btn)}
						onClick={() => {
							removeUser({ name, password })
						}}
					>
						<UiTypography font='Montserrat-R'>Удалить аккаунт</UiTypography>
					</UiButton>
				</div>
			</form>
		</section>
	)
}

export { ProfileView }
