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
import { CATALOGS } from '@shared/constants/catalogs'

const SLUG = ADD_CATALOG_ITEM_SLUG

const CatalogAddItemModal = ({ className, ...props }) => {
	const slug = useParams()['slug']
	const hideModal = useModals(hideModalSelector)
	const addDataToSlug = useMainData(addDataToSlugSelector)

	const type = useMemo(() => {
		return slug === CATALOGS.chairs.key
			? CATALOGS.chairs.value
			: slug === CATALOGS.tables.key
			? CATALOGS.tables.value
			: slug === CATALOGS.storageSystems.key
			? CATALOGS.storageSystems.value
			: slug === CATALOGS.upFurniture.key
			? CATALOGS.upFurniture.value
			: slug === CATALOGS.partitions.key
			? CATALOGS.partitions.value
			: slug === CATALOGS.reception.key
			? CATALOGS.reception.value
			: slug === CATALOGS.accessories.key
	}, [slug])

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
					addDataToSlug({ data: { id: nanoid(), name, price, type }, slug })
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
				<UiButton className={cls.btn} type='submit'>
					<UiTypography font='Montserrat-R'>Добавить</UiTypography>
				</UiButton>
			</form>
		</UiModal>
	)
}

export { CatalogAddItemModal }
