import clsx from 'clsx'
import cls from './index.module.scss'
import { dataSelector, useMainData } from '@shared/store/useMainData'
import { Item } from './Item'

const CatalogList = ({ className, slug, ...props }) => {
	const data = useMainData(dataSelector)[slug] || []

	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			{data.map(props => {
				return <Item data={{ ...props }} key={props.id} />
			})}
		</ul>
	)
}

export { CatalogList }
