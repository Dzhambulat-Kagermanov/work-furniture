import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'

const ItemQntAction = ({ className, children, ...props }) => {
	const [itemQnt, setItemQnt] = useState(children)

	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.minus)}
				disabled={itemQnt - 1 < 0}
				onClick={() => {
					setItemQnt(cur => cur - 1)
				}}
			>
				<Minus />
			</UiButton>
			<UiTypography font='Montserrat-B' Tag='strong'>
				{itemQnt}
			</UiTypography>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.plus)}
				onClick={() => {
					setItemQnt(cur => cur + 1)
				}}
			>
				<Plus />
			</UiButton>
		</div>
	)
}

export { ItemQntAction }
