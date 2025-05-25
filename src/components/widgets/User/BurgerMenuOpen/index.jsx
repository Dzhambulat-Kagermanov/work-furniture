import clsx from 'clsx'
import cls from './index.module.scss'
import { AlignJustify } from 'lucide-react'
import { showModalSelector, useModals } from '@shared/store/useModals'
import { BURGER_MENU_SLUG } from '@shared/constants/modals-slugs'

const SLUG = BURGER_MENU_SLUG

const BurgerMenuOpen = ({ className, onClick, ...props }) => {
	const showModal = useModals(showModalSelector)

	return (
		<button
			className={clsx(cls.wrapper, className)}
			onClick={e => {
				onClick && onClick(e)
				showModal({ slug: SLUG })
			}}
			{...props}
		>
			<AlignJustify />
		</button>
	)
}

export { BurgerMenuOpen }
