import { CatalogAddItemModal } from '@widgets/Admin/CatalogAddItemModal'
import cls from './index.module.scss'
import { CatalogList } from '@widgets/Admin/CatalogList'
import { CatalogEditItemModal } from '@widgets/Admin/CatalogEditItemModal'

const CatalogScreen = props => {
	return (
		<main className={cls.wrapper} {...props}>
			<CatalogList />
			<CatalogAddItemModal />
			<CatalogEditItemModal />
		</main>
	)
}

export { CatalogScreen }
