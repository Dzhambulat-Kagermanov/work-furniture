import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { Content } from './Content'
import { LG_BIG, LG_MID } from '@shared/constants/breakpoints'
import { useScreen } from '@shared/hooks/useScreen'

const HomeDelivery = ({ className, ...props }) => {
	const { screenWidth } = useScreen()
	return (
		<UiContainer
			id='delivery-anchor'
			className={clsx(cls.wrapper, className)}
			{...props}
			variant='shrink'
		>
			<UiTypography font='JosefinSans-R' Tag='h2' className={cls.title}>
				Доставка
			</UiTypography>
			<UiTypography font='JosefinSans-R' Tag='p' className={cls.subtitle}>
				Мы понимаем, насколько важно быстро и эффективно доставить вам офисную
				{screenWidth >= LG_BIG ? <br /> : null}
				мебель. Для этого предлагаем различные варианты доставки в соответствии
				с вашими
				{screenWidth >= LG_BIG ? <br /> : null}
				потребностями !
			</UiTypography>
			<div className={cls.content}>
				<Content />
				{screenWidth >= LG_MID ? (
					<img
						src='/images/User/Home/Delivery/illustration.png'
						alt='Доставка'
					/>
				) : null}
			</div>
		</UiContainer>
	)
}

export { HomeDelivery }
