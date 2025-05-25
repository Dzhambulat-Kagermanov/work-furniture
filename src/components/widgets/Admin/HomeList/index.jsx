import clsx from 'clsx'
import cls from './index.module.scss'
import { Item } from './Item'
import { ROUTES } from '@shared/constants/routes'

const HomeList = ({ className, ...props }) => {
	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			<Item
				href={ROUTES.ADMIN.CATALOG('chairs')}
				image='/images/Admin/Catalogs/chairs.webp'
			>
				Стулья
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('tables')}
				image='/images/Admin/Catalogs/tables.webp'
			>
				Столы
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('storage-systems')}
				image='/images/Admin/Catalogs/storage-systems.png'
			>
				Системы хранения
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('up-furniture')}
				image='/images/Admin/Catalogs/up-furniture.webp'
			>
				Мягкая мебель
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('partitions')}
				image='/images/Admin/Catalogs/partitions.webp'
			>
				Перегородки
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('reception')}
				image='/images/Admin/Catalogs/reception.png'
			>
				Ресепшн
			</Item>
			<Item
				href={ROUTES.ADMIN.CATALOG('accessories')}
				image='/images/Admin/Catalogs/accessories.webp'
			>
				Аксессуары
			</Item>
		</ul>
	)
}

export { HomeList }
