import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { Link } from 'react-router-dom'
import { Users, Grid2X2, FolderDot, Package } from 'lucide-react'

const Navigation = ({ className, ...props }) => {
	return (
		<nav className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography Tag={Link} font='Inter-R' to='#' className={cls.link}>
				<Users /> <p>О нас</p>
			</UiTypography>
			<UiTypography Tag={Link} font='Inter-R' to='#' className={cls.link}>
				<Grid2X2 /> <p>Каталог</p>
			</UiTypography>
			<UiTypography Tag={Link} font='Inter-R' to='#' className={cls.link}>
				<FolderDot /> <p>Наши проекты</p>
			</UiTypography>
			<UiTypography Tag={Link} font='Inter-R' to='#' className={cls.link}>
				<Package /> <p>Доставка</p>
			</UiTypography>
		</nav>
	)
}

export { Navigation }
