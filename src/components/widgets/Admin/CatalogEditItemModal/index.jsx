import { UiModal } from '@shared/ui/UiModal'
import cls from './index.module.scss'
import clsx from 'clsx'
import { EDIT_CATALOG_ITEM_SLUG } from '@shared/constants/modals-slugs'
import { UiInput } from '@shared/ui/UiInput'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import { X } from 'lucide-react'
import { hideModalSelector, useModals } from '@shared/store/useModals'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADMIN_CATALOG_ADD_SCHEMA } from '@shared/utils/validationSchemas'
import {
	currentEditItemIdSelector,
	dataSelector,
	editDataToSlugSelector,
	useMainData,
} from '@shared/store/useMainData'
import { useParams } from 'react-router-dom'

const SLUG = EDIT_CATALOG_ITEM_SLUG

const CatalogEditItemModal = ({ className, ...props }) => {
	const slug = useParams()['slug']
	const id = useMainData(currentEditItemIdSelector)
	const editUser = useMainData(editDataToSlugSelector)
	const hideModal = useModals(hideModalSelector)
	const data = useMainData(dataSelector)?.[slug].find(props => {
		return props.id === id
	})

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(ADMIN_CATALOG_ADD_SCHEMA),
	})

	return (
		<UiModal
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
				onSubmit={handleSubmit(({ name, price }) => {
					if (data) {
						editUser({ data: { ...data, name, price }, slug })
						hideModal({ slug: SLUG })
					}
				})}
			>
				<UiInput
					label='Название'
					inputProps={{ ...register('name'), defaultValue: data?.name }}
					errorMessage={errors.name?.message}
				/>
				<UiInput
					label='Цена ₽'
					inputProps={{
						...register('price'),
						type: 'number',
						defaultValue: data?.price,
					}}
					errorMessage={errors.price?.message}
				/>
				<UiButton className={cls.btn} type='submit'>
					<UiTypography font='Montserrat-R'>Изменить</UiTypography>
				</UiButton>
			</form>
		</UiModal>
	)
}

export { CatalogEditItemModal }
