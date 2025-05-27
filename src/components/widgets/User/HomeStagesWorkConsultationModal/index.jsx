import { UiModal } from '@shared/ui/UiModal'
import cls from './index.module.scss'
import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import { UiInput } from '@shared/ui/UiInput'
import { X } from 'lucide-react'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiTextarea } from '@shared/ui/UiTextarea'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { HOME_STAGES_WORK_CONSULTATION_SCHEMA } from '@shared/utils/validationSchemas'
import { HOME_STAGES_WORK_CONSULTATION_SLUG } from '@shared/constants/modals-slugs'
import { hideModalSelector, useModals } from '@shared/store/useModals'

const SLUG = HOME_STAGES_WORK_CONSULTATION_SLUG

const HomeStagesWorkConsultationModal = ({ className, ...props }) => {
	const hideModal = useModals(hideModalSelector)
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(HOME_STAGES_WORK_CONSULTATION_SCHEMA),
	})

	return (
		<UiModal
			onClose={() => {
				reset()
			}}
			className={clsx(cls.wrapper, className)}
			isYCenter
			isXCenter
			unmountDelay={400}
			slug={SLUG}
			contentClassName={cls.container}
			{...props}
		>
			<div className={cls.header}>
				<UiButton
					variant='ghost'
					className={cls.close_btn}
					onClick={() => {
						hideModal({ slug: SLUG })
					}}
				>
					<X />
				</UiButton>
			</div>
			<form
				className={cls.form}
				onSubmit={handleSubmit(
					({ firstName, lastName, email, description }) => {
						alert(
							`Заявка отправлена ${JSON.stringify({
								firstName,
								lastName,
								email,
								description,
							})}`
						)
						hideModal({ slug: SLUG })
					}
				)}
			>
				<UiInput
					label='Имя'
					inputProps={{ ...register('firstName') }}
					errorMessage={errors.firstName?.message}
				/>
				<UiInput
					label='Фамилия'
					inputProps={{ ...register('lastName') }}
					errorMessage={errors.lastName?.message}
				/>
				<UiInput
					label='Ваша почта'
					inputProps={{ ...register('email') }}
					errorMessage={errors.email?.message}
				/>
				<UiTextarea
					label='Особые пожелания'
					inputProps={{ ...register('description'), type: 'number' }}
					errorMessage={errors.description?.message}
				/>
				<UiButton className={cls.btn} type='submit'>
					<UiTypography font='Montserrat-R'>Отправить</UiTypography>
				</UiButton>
			</form>
		</UiModal>
	)
}

export { HomeStagesWorkConsultationModal }
