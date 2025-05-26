import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { ItemQntAction } from '../ItemQntActions'
import { useNavigate, useParams } from 'react-router-dom'
import { UiButton } from '@shared/ui/UiButton'
import { Trash2 } from 'lucide-react'
import {
	addCartItemSelector,
	cartHasItemSelector,
	useCart,
} from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'

const Item = ({
	className,
	data: { name, price, id, type, qnt },
	onClick,
	...props
}) => {
	const slug = useParams()['slug']
	const session = useAuth(sessionSelector)
	const cartHasItem = useCart(cartHasItemSelector)
	const addCartItem = useCart(addCartItemSelector)
	const navigate = useNavigate()

	const has = cartHasItem({ name: session?.name, id })

	return (
		<li
			className={clsx(cls.wrapper, className)}
			{...props}
			onClick={e => {
				onClick && onClick(e)
				navigate('#')
			}}
		>
			<UiTypography font='Inter-R'>{name}</UiTypography>
			<UiTypography Tag='strong' font='Inter-R'>
				{price}
			</UiTypography>
			<UiTypography font='Inter-R'>{type}</UiTypography>
			{has ? (
				<ItemQntAction id={id}>{qnt}</ItemQntAction>
			) : (
				<UiButton
					className={cls.btn}
					onClick={() => {
						addCartItem({ name: session?.name, id, slug })
					}}
				>
					<UiTypography font='Montserrat-R'>В корзину</UiTypography>
				</UiButton>
			)}
			<UiButton variant='ghost' className={cls.delete_btn}>
				<Trash2 />
			</UiButton>
		</li>
	)
}

export { Item }
