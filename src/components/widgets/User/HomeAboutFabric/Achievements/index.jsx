import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'

const Achievements = ({ className, ...props }) => {
	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			<li className={cls.link}>
				<div className={cls.icon}>
					<img src='/images/User/Home/AboutFabric/cupe.svg' alt='Кубок' />
				</div>
				<UiTypography font='Montserrat-R'>топ 10 по России</UiTypography>
			</li>
			<li className={cls.link}>
				<div className={cls.icon}>
					<UiTypography font='Montserrat-R'>
						15
						<br />
						лет
					</UiTypography>
				</div>
				<UiTypography font='Montserrat-R'>на рынке</UiTypography>
			</li>
			<li className={cls.link}>
				<div className={cls.icon}>
					<img src='/images/User/Home/AboutFabric/star.svg' alt='Кубок' />
				</div>
				<UiTypography font='Montserrat-R'>гарант качества</UiTypography>
			</li>
		</ul>
	)
}

export { Achievements }
