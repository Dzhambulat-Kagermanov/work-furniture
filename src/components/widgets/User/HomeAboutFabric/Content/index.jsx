import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'

const Content = ({ className, ...props }) => {
	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='JosefinSans-R' Tag='h2'>
				Наша фабрика
			</UiTypography>
			<UiTypography font='JosefinSans-R' className={cls.content}>
				<UiTypography font='JosefinSans-SB' Tag='span'>
					ioofice
				</UiTypography>{' '}
				— это мебельная фабрика, которая придерживается принципов устойчивого
				развития.
				<br />
				<br />
				Мы используем экологически чистые материалы и процессы, чтобы
				минимизировать воздействие на окружающую среду, создавая красивую,
				долговечную и ответственно изготовленную мебель. Мы верим в то, что
				мебель должна служить всю жизнь.
			</UiTypography>
		</div>
	)
}

export { Content }
