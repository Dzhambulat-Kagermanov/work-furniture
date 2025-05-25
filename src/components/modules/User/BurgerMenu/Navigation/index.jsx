import { ROUTES } from '@shared/constants/routes'
import { UiTypography } from '@shared/ui/UiTypography'
import clsx from 'clsx'
import {
	Users,
	Grid2X2,
	FolderDot,
	Package,
	ShoppingCart,
	CircleUserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import cls from './index.module.scss'
import { hideModalSelector, useModals } from '@shared/store/useModals'
import { BURGER_MENU_SLUG } from '@shared/constants/modals-slugs'

const SLUG = BURGER_MENU_SLUG

const Navigation = ({ className, ...props }) => {
	const hideModal = useModals(hideModalSelector)

	const handleLinkClick = () => {
		hideModal({ slug: SLUG })
	}

	return (
		<nav className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography
				onClick={handleLinkClick}
				Tag={Link}
				font='Inter-R'
				to='#'
				className={cls.link}
			>
				<Users /> <p>О нас</p>
			</UiTypography>
			<UiTypography
				onClick={handleLinkClick}
				Tag={Link}
				font='Inter-R'
				to='#'
				className={cls.link}
			>
				<Grid2X2 /> <p>Каталог</p>
			</UiTypography>
			<UiTypography
				onClick={handleLinkClick}
				Tag={Link}
				font='Inter-R'
				to='#'
				className={cls.link}
			>
				<FolderDot /> <p>Наши проекты</p>
			</UiTypography>
			<UiTypography
				onClick={handleLinkClick}
				Tag={Link}
				font='Inter-R'
				to='#'
				className={cls.link}
			>
				<Package /> <p>Доставка</p>
			</UiTypography>
			<div className={cls.actions}>
				<UiTypography
					onClick={handleLinkClick}
					Tag={Link}
					to={ROUTES.CART}
					font='Inter-R'
					className={cls.actions_link}
				>
					<ShoppingCart />
				</UiTypography>
				<UiTypography
					onClick={handleLinkClick}
					Tag={Link}
					to={ROUTES.PROFILE}
					font='Inter-R'
					className={cls.actions_link}
				>
					<CircleUserRound />
				</UiTypography>
			</div>
		</nav>
	)
}

export { Navigation }
