import clsx from 'clsx'
import cls from './index.module.scss'
import { Item } from './Item'
import { ShoppingBasket } from 'lucide-react'
import { UiTypography } from '@shared/ui/UiTypography'

const CartList = ({ className, products, ...props }) => {
	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			{products.length ? (
				products.map(data => {
					return <Item data={data} key={data.id} />
				})
			) : (
				<li className={cls.empty}>
					<ShoppingBasket />
					<UiTypography font='Inter-R' Tag='h2'>
						Корзина пуста
					</UiTypography>
				</li>
			)}
		</ul>
	)
}

export { CartList }
