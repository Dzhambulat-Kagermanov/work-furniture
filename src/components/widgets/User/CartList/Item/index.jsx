import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { ItemQntAction } from '../ItemQntActions'
import { useNavigate } from 'react-router-dom'
import { UiButton } from '@shared/ui/UiButton'
import { Trash2 } from 'lucide-react'
import { resetCartItemSelector, useCart } from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'

const Item = ({
	className,
	data: { name, price, id, type, qnt, slug },
	onClick,
	...props
}) => {
	const resetCartItem = useCart(resetCartItemSelector)
	const navigate = useNavigate()
	const session = useAuth(sessionSelector)

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
			<ItemQntAction id={id} slug={slug}>
				{qnt}
			</ItemQntAction>
			<UiButton
				variant='ghost'
				className={cls.delete_btn}
				onClick={() => {
					resetCartItem({ name: session?.name, id })
				}}
			>
				<Trash2 />
			</UiButton>
		</li>
	)
}

export { Item }
