import clsx from 'clsx'
import cls from './index.module.scss'
import { UiInput } from '@shared/ui/UiInput'
import { Lock, ShieldUser } from 'lucide-react'
import { UiPasswordInput } from '@shared/ui/UiPasswordInput'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import {
	editUserSelector,
	removeUserSelector,
	unAuthorizationUserSelector,
	useAuth,
} from '@shared/store/useAuth'

const ProfileView = ({ className, session: { name, password }, ...props }) => {
	const removeUser = useAuth(removeUserSelector)
	const unAuthorizationUser = useAuth(unAuthorizationUserSelector)
	const editUser = useAuth(editUserSelector)

	return (
		<section className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='JosefinSans-R' className={cls.title}>
				Ваш профиль
			</UiTypography>
			<form className={cls.form}>
				<UiInput
					inputProps={{ defaultValue: name }}
					label='Имя'
					icon={<ShieldUser />}
				/>
				<UiPasswordInput
					icon={<Lock />}
					isDefaultShowPassword
					inputProps={{ defaultValue: password }}
					label='Пароль'
					errorMessage={'dsas'}
				/>
				<div className={cls.actions}>
					<UiButton
						className={clsx(cls.btn)}
						onClick={() => {
							editUser({ name, password })
						}}
					>
						<UiTypography font='JosefinSans-R'>Сохранить</UiTypography>
					</UiButton>
					<UiButton
						onClick={() => {
							unAuthorizationUser()
						}}
						variant='danger'
						font='JosefinSans-R'
						className={clsx(cls.btn)}
					>
						Выйти
					</UiButton>
					<UiButton
						variant='danger'
						className={clsx(cls.btn)}
						onClick={() => {
							removeUser({ name, password })
						}}
					>
						<UiTypography font='JosefinSans-R'>Удалить аккаунт</UiTypography>
					</UiButton>
				</div>
			</form>
		</section>
	)
}

export { ProfileView }
