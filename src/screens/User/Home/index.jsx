import clsx from 'clsx'
import cls from './index.module.scss'

const HomeScreen = ({ className, ...props }) => {
	return (
		<main className={clsx(cls.main, className)} {...props}>
			1
		</main>
	)
}

export { HomeScreen }
