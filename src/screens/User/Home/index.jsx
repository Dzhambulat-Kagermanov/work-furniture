import clsx from 'clsx'
import cls from './index.module.scss'
import { HomeHero } from '@widgets/User/HomeHero'
import { HomeAboutFabric } from '@widgets/User/HomeAboutFabric'
import { HomeAdvantages } from '@widgets/User/HomeAdvantages'

const HomeScreen = ({ className, ...props }) => {
	return (
		<main className={clsx(cls.main, className)} {...props}>
			<HomeHero />
			<HomeAboutFabric />
			<HomeAdvantages />
		</main>
	)
}

export { HomeScreen }
