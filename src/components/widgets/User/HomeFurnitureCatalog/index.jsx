import clsx from 'clsx'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'
import { CatalogCard } from './CatalogCard'
import { CatalogBlock } from './CatalogBlock'

const HomeFurnitureCatalog = ({ className, ...props }) => {
	return (
		<UiContainer
			id='catalog-anchor'
			className={clsx(cls.wrapper, className)}
			{...props}
			variant='shrink'
		>
			<UiTypography font='JosefinSans-SB' Tag='h2'>
				Каталог мебели
			</UiTypography>
			<ul className={cls.cards_content}>
				<CatalogCard image='/images/User/Home/Catalog/chairs.png'>
					Кресла
				</CatalogCard>
				<CatalogCard image='/images/User/Home/Catalog/tables.png'>
					Столы
				</CatalogCard>
				<CatalogCard image='/images/User/Home/Catalog/storageSystems.png'>
					Системы хранения
				</CatalogCard>
			</ul>
			<ul className={cls.blocks_content}>
				<CatalogBlock>Мягкая мебель</CatalogBlock>
				<CatalogBlock>Перегородки</CatalogBlock>
				<CatalogBlock>Реcепшн</CatalogBlock>
				<CatalogBlock>Аксессуары</CatalogBlock>
			</ul>
		</UiContainer>
	)
}

export { HomeFurnitureCatalog }
