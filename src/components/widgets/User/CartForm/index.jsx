import clsx from 'clsx'
import cls from './index.module.scss'
import { CartList } from '../CartList'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'

const CartForm = ({ className, ...props }) => {
	return (
		<form className={clsx(cls.wrapper, className)} {...props}>
			<CartList />
			<UiButton className={cls.btn}>
				<UiTypography font='JosefinSans-R'>Оформить доставку</UiTypography>
			</UiButton>
		</form>
	)
}

export { CartForm }
