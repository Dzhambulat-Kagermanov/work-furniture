import clsx from 'clsx'
import cls from './index.module.scss'
import { ItemQntAction } from '../ItemQntActions'
import { useNavigate } from 'react-router-dom'
import { UiButton } from '@shared/ui/UiButton'
import { Trash2 } from 'lucide-react'
import { resetCartItemSelector, useCart } from '@shared/store/useCart'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { CatalogCard } from '@widgets/shared/CatalogCard'

const Item = ({
	className,
	data: { name, price, id, type, qnt, slug, image },
	onClick,
	...props
}) => {
	const resetCartItem = useCart(resetCartItemSelector)
	const navigate = useNavigate()
	const session = useAuth(sessionSelector)

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
			<div className={cls.actions}>
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
			</div>
		</CatalogCard>
	)
}

export { Item }
