import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { UiContainer } from '@shared/ui/UiContainer'
import { Navigation } from './Navigation'
import cls from './index.module.scss'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'
import { MenuOpenButton } from '@modules/User/Header/MenuOpenButton'
import { ROUTES } from '@shared/constants/routes'

const Header = ({ className, ...props }) => {
	const { screenWidth } = useScreen()

	return (
		<header className={clsx(cls.wrapper, className)} {...props}>
			<UiContainer Tag='header' variant='expand' className={cls.container}>
				<Link to={ROUTES.HOME} className={cls.logo}>
					<img src='/images/logo.svg' />
				</Link>
				{screenWidth >= MD_MID ? <Navigation /> : <MenuOpenButton />}
			</UiContainer>
		</header>
	)
}

export { Header }
