import { memo, useEffect } from 'react'
import { useBodyClassName } from '@shared/hooks/useBodyClassName'
import { useModals } from '@shared/store/useModals'
import clsx from 'clsx'
import cls from './index.module.scss'

const UiModal = memo(
	({
		className,
		isXCenter,
		isYCenter,
		onClose,
		onOpen,
		slug,
		ContentTag = 'div',
		WrapperTag = 'section',
		children,
		unmountDelay = 150,
		contentClassName,
		notModalClose,
	}) => {
		const changeUnmountDelay = useModals(state => state.changeUnmountDelay)
		const hideModal = useModals(state => state.hideModal)
		const visibleState = useModals(
			state => state.modalsStates[slug]?.visibleState
		)
		const mountedState = useModals(
			state => state.modalsStates[slug]?.mountedState
		)

		const bodyClassName = useBodyClassName()

		useEffect(() => {
			if (mountedState) {
				onOpen && onOpen()
				bodyClassName({
					className: 'hide-scrollbar',
					type: 'add',
				})
			} else {
				bodyClassName({
					className: 'hide-scrollbar',
					type: 'remove',
				})
			}
		}, [mountedState])

		useEffect(() => {
			if (unmountDelay) changeUnmountDelay({ slug, unmountDelay })
		}, [])

		const handleClose = event => {
			onClose && onClose(event)
			!notModalClose && hideModal({ slug })
		}

		return (
			<>
				{mountedState ? (
					<WrapperTag
						onClick={handleClose}
						className={clsx(
							cls.wrapper,
							{
								[cls.active]: visibleState,
								[cls.is_x_center]: isXCenter,
							},
							className
						)}
						style={{
							transitionDuration: `${unmountDelay}ms`,
						}}
					>
						<div className={cls.content_wrapper}>
							<ContentTag
								onClick={e => e.stopPropagation()}
								className={clsx(
									cls.content,
									{
										[cls.is_y_center]: isYCenter,
									},
									contentClassName
								)}
							>
								{children}
							</ContentTag>
						</div>
					</WrapperTag>
				) : null}
			</>
		)
	}
)

export { UiModal }
