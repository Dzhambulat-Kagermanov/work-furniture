import clsx from 'clsx'
import cls from './index.module.scss'
import { Item } from './Item'
import { ShoppingBasket } from 'lucide-react'
import { UiTypography } from '@shared/ui/UiTypography'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { cartSelector, useCart } from '@shared/store/useCart'

const CartList = ({ className, ...props }) => {
	const session = useAuth(sessionSelector)
	const cart = useCart(cartSelector)[session?.name] || []

	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			{cart.length ? (
				cart.map(data => {
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
