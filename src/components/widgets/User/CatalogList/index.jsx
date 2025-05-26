import clsx from 'clsx'
import cls from './index.module.scss'
import { dataSelector, useMainData } from '@shared/store/useMainData'
import { Item } from './Item'
import { BrushCleaning } from 'lucide-react'
import { UiTypography } from '@shared/ui/UiTypography'

const CatalogList = ({ className, slug, ...props }) => {
	const data = useMainData(dataSelector)[slug] || []

	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			{data.length ? (
				data.map(props => {
					return <Item data={{ ...props }} key={props.id} />
				})
			) : (
				<li className={cls.empty}>
					<BrushCleaning />
					<UiTypography font='Inter-R' Tag='h2'>
						Каталог пуст
					</UiTypography>
				</li>
			)}
		</ul>
	)
}

export { CatalogList }
