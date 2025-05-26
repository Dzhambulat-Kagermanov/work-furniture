import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { ItemQntAction } from '../ItemQntActions'
import { useNavigate, useParams } from 'react-router-dom'
import { UiButton } from '@shared/ui/UiButton'
import {
	addCartItemSelector,
	cartHasItemSelector,
	cartSelector,
	useCart,
} from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { ROUTES } from '@shared/constants/routes'
import { formatPrice } from '@shared/lib/formatPrice'

const Item = ({
	className,
	data: { name, price, id, type, qnt, img },
	onClick,
	...props
}) => {
	const slug = useParams()['slug']
	const session = useAuth(sessionSelector)
	const cartHasItem = useCart(cartHasItemSelector)
	const addCartItem = useCart(addCartItemSelector)
	const navigate = useNavigate()
	const cart = useCart(cartSelector)

	const has = cartHasItem({ name: session?.name, id })

	return (
		<li
			className={clsx(cls.wrapper, className)}
			{...props}
			onClick={e => {
				onClick && onClick(e)
			}}
		>
			<UiTypography font='Montserrat-SB' className={cls.name}>
				{name}
			</UiTypography>
			<UiTypography Tag='strong' font='Montserrat-B' className={cls.price}>
				{formatPrice(price)} ₽
			</UiTypography>
			<UiTypography font='Inter-R' className={cls.catalog}>
				Каталог: {type}
			</UiTypography>
			{has ? (
				<ItemQntAction id={id}>{qnt}</ItemQntAction>
			) : (
				<UiButton
					className={cls.btn}
					onClick={() => {
						if (session) addCartItem({ id, name: session.name, slug })
						else {
							navigate('/profile')
						}
					}}
				>
					<UiTypography font='Montserrat-R'>В корзину</UiTypography>
				</UiButton>
			)}
		</li>
	)
}

export { Item }
