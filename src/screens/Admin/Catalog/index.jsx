import { CatalogAddItemModal } from '@widgets/Admin/CatalogAddItemModal'
import cls from './index.module.scss'
import { CatalogList } from '@widgets/Admin/CatalogList'

const CatalogScreen = props => {
	return (
		<main className={cls.wrapper} {...props}>
			<CatalogList />
			<CatalogAddItemModal />
		</main>
	)
}

export { CatalogScreen }
