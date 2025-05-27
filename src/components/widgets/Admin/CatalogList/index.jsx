import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { dataSelector, useMainData } from '@shared/store/useMainData'
import { useParams } from 'react-router-dom'
import { Item } from './Item'
import { BrushCleaning } from 'lucide-react'

const CatalogList = ({ className, ...props }) => {
	const dynamicParams = useParams()['slug']

	const data = useMainData(dataSelector)?.[dynamicParams]

	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			{data?.length ? (
				<ul className={cls.list}>
					{data.map(({ name, id, type, price, image }) => {
						return (
							<Item
								key={id}
								name={name}
								id={id}
								type={type}
								price={price}
								image={image}
								slug={dynamicParams}
							/>
						)
					})}
				</ul>
			) : (
				<li className={cls.empty}>
					<BrushCleaning />
					<UiTypography font='Inter-R' Tag='h2'>
						Каталог пуст
					</UiTypography>
				</li>
			)}
		</div>
	)
}

export { CatalogList }
