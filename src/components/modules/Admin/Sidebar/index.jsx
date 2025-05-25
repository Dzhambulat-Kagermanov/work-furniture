import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@shared/constants/routes'
import { UiButton } from '@shared/ui/UiButton'
import { SquareArrowLeft } from 'lucide-react'

const Sidebar = ({ className, ...props }) => {
	const path = useLocation().pathname
	const navigate = useNavigate()

	return (
		<aside className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='JosefinSans-SB' Tag='h2' className={cls.title}>
				Каталоги
			</UiTypography>
			<nav className={cls.nav}>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.HOME}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin',
					})}
				>
					Все
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('chairs')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/chairs',
					})}
				>
					Стулья
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('tables')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/tables',
					})}
				>
					Столы
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('storage-systems')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/storage-systems',
					})}
				>
					Системы хранения
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('up-furniture')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/up-furniture',
					})}
				>
					Мягкая мебель
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('partitions')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/partitions',
					})}
				>
					Перегородки
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('reception')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/reception',
					})}
				>
					Ресепшн
				</UiTypography>
				<UiTypography
					Tag={Link}
					to={ROUTES.ADMIN.CATALOG('accessories')}
					font='JosefinSans-R'
					className={clsx(cls.link, {
						[cls.active]: path === '/admin/accessories',
					})}
				>
					Аксессуары
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
