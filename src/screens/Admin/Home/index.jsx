import { HomeList } from '@widgets/Admin/HomeList'
import cls from './index.module.scss'

const HomeScreen = props => {
	return (
		<main className={cls.main} {...props}>
			<HomeList />
		</main>
	)
}

export { HomeScreen }
