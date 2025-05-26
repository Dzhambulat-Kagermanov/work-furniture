import clsx from 'clsx'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'
import { CatalogCard } from './CatalogCard'
import { CatalogBlock } from './CatalogBlock'
import { ROUTES } from '@shared/constants/routes'
import { CATALOGS } from '@shared/constants/catalogs'

const HomeFurnitureCatalog = ({ className, ...props }) => {
	return (
		<UiContainer
			id='catalog-anchor'
			className={clsx(cls.wrapper, className)}
			{...props}
			variant='shrink'
		>
			<UiTypography font='Montserrat-SB' Tag='h2'>
				Каталог мебели
			</UiTypography>
			<ul className={cls.cards_content}>
				<CatalogCard
					href={ROUTES.CATALOG_ITEM(CATALOGS.chairs.key)}
					image='/images/User/Home/Catalog/chairs.png'
				>
					{CATALOGS.chairs.value}
				</CatalogCard>
				<CatalogCard
					href={ROUTES.CATALOG_ITEM(CATALOGS.tables.key)}
					image='/images/User/Home/Catalog/tables.png'
				>
					{CATALOGS.tables.value}
				</CatalogCard>
				<CatalogCard
					href={ROUTES.CATALOG_ITEM(CATALOGS.storageSystems.key)}
					image='/images/User/Home/Catalog/storageSystems.png'
				>
					{CATALOGS.storageSystems.value}
				</CatalogCard>
			</ul>
			<ul className={cls.blocks_content}>
				<CatalogBlock href={ROUTES.CATALOG_ITEM(CATALOGS.upFurniture.key)}>
					{CATALOGS.upFurniture.value}
				</CatalogBlock>
				<CatalogBlock href={ROUTES.CATALOG_ITEM(CATALOGS.partitions.key)}>
					{CATALOGS.partitions.value}
				</CatalogBlock>
				<CatalogBlock href={ROUTES.CATALOG_ITEM(CATALOGS.reception.key)}>
					{CATALOGS.reception.value}
				</CatalogBlock>
				<CatalogBlock href={ROUTES.CATALOG_ITEM(CATALOGS.accessories.key)}>
					{CATALOGS.accessories.value}
				</CatalogBlock>
			</ul>
		</UiContainer>
	)
}

export { HomeFurnitureCatalog }
