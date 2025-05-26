import clsx from 'clsx'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'
import { ROUTES } from '@shared/constants/routes'
import { Link } from 'react-router-dom'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'

const Footer = ({ className, ...props }) => {
	const { screenWidth } = useScreen()

	return (
		<footer className={clsx(cls.wrapper, className)} {...props}>
			<UiContainer variant='expand' className={cls.container}>
				<div className={cls.data}>
					<UiTypography font='Montserrat-R'>Сайт: IO Office</UiTypography>
					<UiTypography font='Montserrat-R'>io-office@gmail.com</UiTypography>
					<UiTypography font='Montserrat-R'>+7 (995) 888 77-77</UiTypography>
				</div>
				{screenWidth >= MD_MID ? (
					<nav className={cls.nav}>
						<UiTypography
							Tag={Link}
							font='Inter-R'
							to={ROUTES.ABOUT_US}
							className={cls.link}
						>
							О нас
						</UiTypography>
						<UiTypography
							Tag={Link}
							font='Inter-R'
							to={ROUTES.CATALOG}
							className={cls.link}
						>
							Каталог
						</UiTypography>
						<UiTypography
							Tag={Link}
							font='Inter-R'
							to={ROUTES.OUR_PROJECTS}
							className={cls.link}
						>
							Наши проекты
						</UiTypography>
						<UiTypography
							Tag={Link}
							font='Inter-R'
							to={ROUTES.DELIVERY}
							className={cls.link}
						>
							Доставка
						</UiTypography>
					</nav>
				) : null}

				<div className={cls.info}>
					<Link to={ROUTES.HOME} className={cls.logo}>
						<img src='/images/logo.svg' />
					</Link>
					<UiTypography font='Montserrat-SB' Tag='h2' className={cls.text}>
						© Copyright IO Office 2025
					</UiTypography>
				</div>
			</UiContainer>
		</footer>
	)
}

export { Footer }
