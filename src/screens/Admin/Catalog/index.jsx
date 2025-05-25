import { CatalogAddItemModal } from '@widgets/Admin/CatalogAddItemModal'
import cls from './index.module.scss'

const CatalogScreen = props => {
	return (
		<main className={cls.wrapper} {...props}>
			<CatalogAddItemModal />
		</main>
	)
}

export { CatalogScreen }
