import { CartForm } from '@widgets/User/CartForm'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'

const CartScreen = props => {
	return (
		<UiContainer variant='shrink' Tag='main' className={cls.wrapper} {...props}>
			<UiTypography font='JosefinSans-SB' className={cls.title}>
				Корзина (20)
			</UiTypography>
			<CartForm />
		</UiContainer>
	)
}

export { CartScreen }
