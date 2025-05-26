import clsx from 'clsx'
import cls from './index.module.scss'
import { CartList } from '../CartList'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import { clearCartItemsSelector, useCart } from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'

const CartForm = ({ className, cart, ...props }) => {
	const session = useAuth(sessionSelector)
	const clearCartItems = useCart(clearCartItemsSelector)
	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<form
			className={clsx(cls.wrapper, className)}
			onSubmit={handleSubmit}
			{...props}
		>
			<CartList />
			<UiButton
				className={cls.btn}
				disabled={!cart.length}
				onClick={() => {
					clearCartItems(session?.name)
					alert('Доставка оформлена')
				}}
			>
				<UiTypography font='Montserrat-R'>Оформить доставку</UiTypography>
			</UiButton>
		</form>
	)
}

export { CartForm }
