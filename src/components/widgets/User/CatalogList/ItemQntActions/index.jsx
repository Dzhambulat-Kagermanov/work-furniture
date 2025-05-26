import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { Plus, Minus } from 'lucide-react'
import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import {
	addCartItemSelector,
	deleteCartItemSelector,
	getItemQntSelector,
	useCart,
} from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { useParams } from 'react-router-dom'

const ItemQntAction = ({ className, children, id, ...props }) => {
	const slug = useParams()['slug']
	const session = useAuth(sessionSelector)
	const addItem = useCart(addCartItemSelector)
	const deleteItem = useCart(deleteCartItemSelector)
	const qnt = useCart(getItemQntSelector)

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
				{qnt({ name: session?.name, id }) || 'Ошибка'}
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
