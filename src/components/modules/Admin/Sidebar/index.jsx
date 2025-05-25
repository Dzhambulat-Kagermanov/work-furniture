import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@shared/constants/routes'
import { UiButton } from '@shared/ui/UiButton'
import { SquareArrowLeft, X } from 'lucide-react'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'
import {
	changeUnmountDelaySelector,
	hideModalSelector,
	modalsStatesSelector,
	useModals,
} from '@shared/store/useModals'
import { SIDEBAR_SLUG } from '@shared/constants/modals-slugs'
import { useEffect } from 'react'
import { CATALOGS } from '@shared/constants/catalogs'

const SLUG = SIDEBAR_SLUG

const Sidebar = ({ className, ...props }) => {
	const path = useLocation().pathname
	const navigate = useNavigate()
	const { screenWidth } = useScreen()
	const modalState = useModals(modalsStatesSelector)[SLUG]
	const hideModal = useModals(hideModalSelector)
	const changeUnmountDelay = useModals(changeUnmountDelaySelector)

	useEffect(() => {
		changeUnmountDelay({ unmountDelay: 500, slug: SLUG })
	}, [])

	return (
		<aside
			className={clsx(
				cls.wrapper,
				{ [cls.active]: modalState?.visibleState },
				className
			)}
			{...props}
		>
			<div className={cls.header}>
				<UiTypography font='Montserrat-SB' Tag='h2' className={cls.title}>
					Каталоги
				</UiTypography>
				{screenWidth < MD_MID ? (
					<UiButton
						variant='ghost'
						className={cls.close_btn}
						onClick={() => {
							hideModal({ slug: SLUG })
						}}
					>
						<X />
					</UiButton>
				) : null}
			</div>
			<nav className={cls.nav}>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.HOME}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin',
					})}
				>
					Все
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.chairs.value)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.chairs.key}`,
					})}
				>
					{CATALOGS.chairs.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.tables.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.tables.key}`,
					})}
				>
					{CATALOGS.tables.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.storageSystems.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.storageSystems.key}`,
					})}
				>
					{CATALOGS.storageSystems.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.upFurniture.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.upFurniture.key}`,
					})}
				>
					{CATALOGS.upFurniture.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.partitions.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.partitions.key}`,
					})}
				>
					{CATALOGS.partitions.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.reception.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.reception.key}`,
					})}
				>
					{CATALOGS.reception.value}
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG(CATALOGS.accessories.key)}
					font='Montserrat-R'
					className={clsx(cls.link, {
						[cls.active]: path === `/admin/${CATALOGS.accessories.key}`,
					})}
				>
					{CATALOGS.accessories.value}
				</UiTypography>
			</nav>
			<UiButton
				variant='ghost'
				className={cls.back_btn}
				onClick={() => {
					navigate(ROUTES.PROFILE)
				}}
			>
				<SquareArrowLeft />
				<UiTypography font='Inter-R'>Вернуться в профиль</UiTypography>
			</UiButton>
		</aside>
	)
}

export { Sidebar }
