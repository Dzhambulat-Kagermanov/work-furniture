import clsx from 'clsx'
import cls from './index.module.scss'
import { HomeHero } from '@widgets/User/HomeHero'

const HomeScreen = ({ className, ...props }) => {
	return (
		<main className={clsx(cls.main, className)} {...props}>
			<HomeHero />
		</main>
	)
}

export { HomeScreen }
