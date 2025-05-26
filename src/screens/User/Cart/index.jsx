import { CartForm } from '@widgets/User/CartForm'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { cartSelector, useCart } from '@shared/store/useCart'

const CartScreen = props => {
	const session = useAuth(sessionSelector)
	const cart = useCart(cartSelector)[session?.name] || []

	return (
		<UiContainer variant='shrink' Tag='main' className={cls.wrapper} {...props}>
			<UiTypography font='Montserrat-SB' className={cls.title}>
				Корзина ({cart.length})
			</UiTypography>
			<CartForm cart={cart} />
		</UiContainer>
	)
}

export { CartScreen }
