import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import { SquarePen, Trash2 } from 'lucide-react'
import {
	removeDataToSlugSelector,
	setCurrentEditItemIdSelector,
	useMainData,
} from '@shared/store/useMainData'
import cls from './index.module.scss'
import { showModalSelector, useModals } from '@shared/store/useModals'
import { EDIT_CATALOG_ITEM_SLUG } from '@shared/constants/modals-slugs'
import { CatalogCard } from '@widgets/shared/CatalogCard'

const SLUG = EDIT_CATALOG_ITEM_SLUG

const Item = ({ className, name, id, type, price, image, slug, ...props }) => {
	const showModal = useModals(showModalSelector)
	const removeDataToSlug = useMainData(removeDataToSlugSelector)
	const setCurrentEditItemId = useMainData(setCurrentEditItemIdSelector)

	return (
		<CatalogCard
			className={clsx(cls.wrapper, className)}
			{...props}
			name={name}
			image={image}
			price={price}
			type={type}
		>
			<div className={cls.actions}>
				<UiButton
					variant='ghost'
					className={clsx(cls.btn, cls.edit_btn)}
					onClick={() => {
						setCurrentEditItemId({ id })
						showModal({ slug: SLUG })
					}}
				>
					<SquarePen />
				</UiButton>
				<UiButton
					variant='ghost'
					className={clsx(cls.btn, cls.delete_btn)}
					onClick={() => {
						removeDataToSlug({ slug, id })
					}}
				>
					<Trash2 />
				</UiButton>
			</div>
		</CatalogCard>
	)
}

export { Item }
