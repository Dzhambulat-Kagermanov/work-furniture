import clsx from 'clsx'
import cls from './index.module.scss'
import { HomeHero } from '@widgets/User/HomeHero'
import { HomeAboutFabric } from '@widgets/User/HomeAboutFabric'
import { HomeAdvantages } from '@widgets/User/HomeAdvantages'
import { HomeProjects } from '@widgets/User/HomeProjects'
import { HomeFurnitureCatalog } from '@widgets/User/HomeFurnitureCatalog'
import { HomeStagesWork } from '@widgets/User/HomeStagesWork'
import { HomeDelivery } from '@widgets/User/HomeDelivery'
import { HomeStagesWorkConsultationModal } from '@widgets/User/HomeStagesWorkConsultationModal'

const HomeScreen = ({ className, ...props }) => {
	return (
		<main className={clsx(cls.main, className)} {...props}>
			<HomeHero />
			<HomeAboutFabric />
			<HomeAdvantages />
			<HomeProjects />
			<HomeFurnitureCatalog />
			<HomeStagesWork />
			<HomeDelivery />
			<HomeStagesWorkConsultationModal />
		</main>
	)
}

export { HomeScreen }
