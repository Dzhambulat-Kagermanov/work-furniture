import { UiModal } from '@shared/ui/UiModal'
import cls from './index.module.scss'
import clsx from 'clsx'
import { ADD_CATALOG_ITEM_SLUG } from '@shared/constants/modals-slugs'

const CatalogAddItemModal = ({ className, ...props }) => {
	return (
		<UiModal
			className={clsx(cls.wrapper, className)}
			isYCenter
			isXCenter
			unmountDelay={400}
			slug={ADD_CATALOG_ITEM_SLUG}
			{...props}
		>
			321321321321
		</UiModal>
	)
}

export { CatalogAddItemModal }
