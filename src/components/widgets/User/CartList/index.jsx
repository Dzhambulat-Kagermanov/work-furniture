import clsx from 'clsx'
import cls from './index.module.scss'
import { Item } from './Item'
import { ShoppingBasket } from 'lucide-react'
import { UiTypography } from '@shared/ui/UiTypography'

const CartList = ({ className, ...props }) => {
	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			<div className={cls.empty}>
				<ShoppingBasket />
				<UiTypography font='Inter-R' Tag='h2'>
					Корзина пуста
				</UiTypography>
			</div>
		</ul>
	)
}

export { CartList }
