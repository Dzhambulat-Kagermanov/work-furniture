import { UiModal } from '@shared/ui/UiModal'
import cls from './index.module.scss'
import clsx from 'clsx'
import { ADD_CATALOG_ITEM_SLUG } from '@shared/constants/modals-slugs'
import { UiInput } from '@shared/ui/UiInput'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import { X } from 'lucide-react'
import { hideModalSelector, useModals } from '@shared/store/useModals'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADMIN_CATALOG_ADD_SCHEMA } from '@shared/utils/validationSchemas'
import { addDataToSlugSelector, useMainData } from '@shared/store/useMainData'
import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useMemo } from 'react'
import { getSlugValue } from '@shared/lib/getSlugValue'

const SLUG = ADD_CATALOG_ITEM_SLUG

const CatalogAddItemModal = ({ className, ...props }) => {
	const slug = useParams()['slug']
	const hideModal = useModals(hideModalSelector)
	const addDataToSlug = useMainData(addDataToSlugSelector)

	const type = useMemo(() => {
		return getSlugValue(slug)
	}, [slug])

	const {
		formState: { errors },
		handleSubmit,
		register,
		reset,
	} = useForm({
		reValidateMode: 'onChange',
		resolver: yupResolver(ADMIN_CATALOG_ADD_SCHEMA),
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
				onSubmit={handleSubmit(({ name, price, image }) => {
					addDataToSlug({
						data: { id: nanoid(), name, price, type, image },
						slug,
					})

					hideModal({ slug: SLUG })
				})}
			>
				<UiInput
					label='Название'
					inputProps={{ ...register('name') }}
					errorMessage={errors.name?.message}
				/>
				<UiInput
					label='Цена ₽'
					inputProps={{ ...register('price'), type: 'number' }}
					errorMessage={errors.price?.message}
				/>
				<UiInput
					label='Ссылка на изображение'
					inputProps={{
						...register('image'),
					}}
					errorMessage={errors.image?.message}
				/>
				<UiButton className={cls.btn} type='submit'>
					<UiTypography font='Montserrat-R'>Добавить</UiTypography>
				</UiButton>
			</form>
		</UiModal>
	)
}

export { CatalogAddItemModal }
