import { CATALOGS } from '@shared/constants/catalogs'

export const getSlugValue = slug => {
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
}
