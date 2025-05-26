import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { Plus, Minus } from 'lucide-react'
import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import {
	addCartItemSelector,
	deleteCartItemSelector,
	useCart,
} from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'

const ItemQntAction = ({ className, children, id, slug, ...props }) => {
	const session = useAuth(sessionSelector)
	const addItem = useCart(addCartItemSelector)
	const deleteItem = useCart(deleteCartItemSelector)

	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.minus)}
				onClick={() => {
					deleteItem({ id, name: session?.name, slug })
				}}
			>
				<Minus />
			</UiButton>
			<UiTypography font='Montserrat-B' Tag='strong'>
				{children}
			</UiTypography>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.plus)}
				onClick={() => {
					addItem({ id, name: session?.name, slug })
				}}
			>
				<Plus />
			</UiButton>
		</div>
	)
}

export { ItemQntAction }
