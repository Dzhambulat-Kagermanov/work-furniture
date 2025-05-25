import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { UiContainer } from '@shared/ui/UiContainer'
import { Navigation } from './Navigation'
import cls from './index.module.scss'

const Header = ({ className, ...props }) => {
	return (
		<header className={clsx(cls.wrapper, className)} {...props}>
			<UiContainer Tag='header' variant='expand' className={cls.container}>
				<Link to='/' className={cls.logo}>
					<img src='/images/logo.svg' />
				</Link>
				<Navigation />
			</UiContainer>
		</header>
	)
}

export { Header }
