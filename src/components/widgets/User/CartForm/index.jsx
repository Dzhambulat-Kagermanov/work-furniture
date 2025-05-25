import clsx from 'clsx'
import cls from './index.module.scss'
import { CartList } from '../CartList'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'

const CartForm = ({ className, ...props }) => {
	const products = []

	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<form
			className={clsx(cls.wrapper, className)}
			onSubmit={handleSubmit}
			{...props}
		>
			<CartList products={products} />
			<UiButton className={cls.btn}>
				<UiTypography font='Montserrat-R'>
					{products.length ? 'Оформить доставку' : 'Добавить новые товары'}
				</UiTypography>
			</UiButton>
		</form>
	)
}

export { CartForm }
