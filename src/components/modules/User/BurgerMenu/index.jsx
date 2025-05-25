import clsx from 'clsx'
import cls from './index.module.scss'
import { X } from 'lucide-react'
import { UiContainer } from '@shared/ui/UiContainer'
import {
	changeUnmountDelaySelector,
	hideModalSelector,
	modalsStatesSelector,
	useModals,
} from '@shared/store/useModals'
import { BURGER_MENU_SLUG } from '@shared/constants/modals-slugs'
import { useEffect } from 'react'
import { Navigation } from './Navigation'

const SLUG = BURGER_MENU_SLUG

const BurgerMenu = ({ className, ...props }) => {
	const modalState = useModals(modalsStatesSelector)[SLUG]
	const hideModal = useModals(hideModalSelector)
	const changeUnmountDelay = useModals(changeUnmountDelaySelector)

	useEffect(() => {
		changeUnmountDelay({ unmountDelay: 500, slug: SLUG })
	}, [])

	return (
		<>
			{modalState?.mountedState ? (
				<UiContainer
					variant='shrink'
					className={clsx(
						cls.wrapper,
						{
							[cls.active]: modalState.visibleState,
						},
						className
					)}
					{...props}
				>
					<div
						className={cls.header}
						onClick={() => {
							hideModal({ slug: SLUG })
						}}
					>
						<button className={cls.btn}>
							<X />
						</button>
					</div>
					<Navigation />
				</UiContainer>
			) : null}
		</>
	)
}

export { BurgerMenu }
