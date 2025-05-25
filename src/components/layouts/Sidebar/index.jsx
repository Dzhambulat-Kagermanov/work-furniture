import { Sidebar } from '@modules/Admin/Sidebar'
import cls from './index.module.scss'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { AlignJustify } from 'lucide-react'
import {
	showModalSelector,
	toggleModalSelector,
	useModals,
} from '@shared/store/useModals'
import {
	ADD_CATALOG_ITEM_SLUG,
	SIDEBAR_SLUG,
} from '@shared/constants/modals-slugs'
import { UiButton } from '@shared/ui/UiButton'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'
import { UiTypography } from '@shared/ui/UiTypography'
import { Plus } from 'lucide-react'

const SLUG = SIDEBAR_SLUG

const SidebarLayout = () => {
	const dynamicParams = useParams()
	const toggle = useModals(toggleModalSelector)
	const { screenWidth } = useScreen()
	const showModal = useModals(showModalSelector)

	return (
		<div className={cls.wrapper}>
			<Sidebar />
			<div className={cls.content}>
				<header className={cls.header}>
					{screenWidth < MD_MID ? (
						<UiButton
							variant='ghost'
							className={cls.sidebar_open_btn}
							onClick={() => {
								toggle({ slug: SLUG })
							}}
						>
							<AlignJustify />
						</UiButton>
					) : null}
					{Object.keys(dynamicParams).length ? (
						<UiButton
							className={cls.add_btn}
							onClick={() => {
								showModal({ slug: ADD_CATALOG_ITEM_SLUG })
							}}
						>
							<UiTypography font='Montserrat-R'>Добавить новый</UiTypography>
							<Plus />
						</UiButton>
					) : null}
				</header>
				<Outlet />
			</div>
		</div>
	)
}

export { SidebarLayout }
