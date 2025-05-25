import clsx from 'clsx'
import cls from './index.module.scss'
import { UiContainer } from '@shared/ui/UiContainer'
import { UiTypography } from '@shared/ui/UiTypography'

const HomeAdvantages = ({ className, ...props }) => {
	return (
		<section className={clsx(cls.wrapper, className)} {...props}>
			<UiContainer className={cls.container} Tag='ul'>
				<li className={cls.item}>
					<img src='/images/User/Home/Advantages/premium.svg' alt='premium' />
					<UiTypography font='Montserrat' Tag='h2'>
						Только премиальные материалы
					</UiTypography>
				</li>
				<li className={cls.item}>
					<img
						src='/images/User/Home/Advantages/environmentalFriendliness.svg'
						alt='environmentalFriendliness'
					/>
					<UiTypography font='Montserrat' Tag='h2'>
						Экологичность
					</UiTypography>
				</li>
				<li className={cls.item}>
					<img src='/images/User/Home/Advantages/strength.svg' alt='strength' />
					<UiTypography font='Montserrat' Tag='h2'>
						Прочность
					</UiTypography>
				</li>
				<li className={cls.item}>
					<img src='/images/User/Home/Advantages/reliable.svg' alt='reliable' />
					<UiTypography font='Montserrat' Tag='h2'>
						Надежное сотрудничество
					</UiTypography>
				</li>
			</UiContainer>
		</section>
	)
}

export { HomeAdvantages }
