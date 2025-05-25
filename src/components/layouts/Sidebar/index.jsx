import { Sidebar } from '@modules/Admin/Sidebar'
import cls from './index.module.scss'
import { Outlet } from 'react-router-dom'
import { AlignJustify } from 'lucide-react'
import { toggleModalSelector, useModals } from '@shared/store/useModals'
import { SIDEBAR_SLUG } from '@shared/constants/modals-slugs'
import { UiButton } from '@shared/ui/UiButton'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'

const SLUG = SIDEBAR_SLUG

const SidebarLayout = () => {
	const toggle = useModals(toggleModalSelector)
	const { screenWidth } = useScreen()

	return (
		<div className={cls.wrapper}>
			<Sidebar />
			<div className={cls.content}>
				{screenWidth < MD_MID ? (
					<header className={cls.header}>
						<UiButton
							variant='ghost'
							className={cls.sidebar_open_btn}
							onClick={() => {
								toggle({ slug: SLUG })
							}}
						>
							<AlignJustify />
						</UiButton>
					</header>
				) : null}
				<Outlet />
			</div>
		</div>
	)
}

export { SidebarLayout }
