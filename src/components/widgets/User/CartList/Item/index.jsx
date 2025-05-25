import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { ItemQntAction } from '../ItemQntActions'
import { useNavigate } from 'react-router-dom'
import { UiButton } from '@shared/ui/UiButton'
import { Trash2 } from 'lucide-react'

const Item = ({
	className,
	data: { name, price, id, type, qnt },
	onClick,
	...props
}) => {
	const navigate = useNavigate()

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
			<ItemQntAction>{qnt}</ItemQntAction>
			<UiButton variant='ghost' className={cls.delete_btn}>
				<Trash2 />
			</UiButton>
		</li>
	)
}

export { Item }
