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
import { CatalogCard } from '@widgets/shared/CatalogCard'

const Item = ({
	className,
	data: { name, price, id, type, qnt, image },
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
		<CatalogCard
			frontClassName={cls.front}
			backClassName={cls.back}
			className={clsx(cls.wrapper, className)}
			name={name}
			image={image}
			price={price}
			type={type}
			{...props}
		>
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
		</CatalogCard>
	)
}

export { Item }
