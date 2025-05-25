import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { useScreen } from '@shared/hooks/useScreen'
import { MD_MID } from '@shared/constants/breakpoints'

const NEXT_EL = 'iepoqfifpd320321dimwqqm'
const PREV_EL = 'fpowfkopefpewfmewfewmff'

const Slider = ({ className, ...props }) => {
	const { screenWidth } = useScreen()

	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			{screenWidth >= MD_MID ? (
				<button className={clsx(cls.btn, cls.prev_btn)} id={PREV_EL}>
					<img src='/images/User/Home/Projects/arrow.svg' alt='Предыдущий' />
				</button>
			) : null}
			<Swiper
				loop
				className={cls.slider}
				slidesPerView={1}
				modules={[Autoplay, Navigation]}
				autoplay={{
					delay: 5000,
				}}
				navigation={{
					nextEl: `#${NEXT_EL}`,
					prevEl: `#${PREV_EL}`,
				}}
			>
				<SwiperSlide className={cls.slide}>
					<div className={cls.content}>
						<UiTypography font='Montserrat-R' Tag='h2'>
							Название организации 1
						</UiTypography>
					</div>
				</SwiperSlide>
				<SwiperSlide className={cls.slide}>
					<div className={cls.content}>
						<UiTypography font='Montserrat-R' Tag='h2'>
							Название организации 2
						</UiTypography>
					</div>
				</SwiperSlide>
				<SwiperSlide className={cls.slide}>
					<div className={cls.content}>
						<UiTypography font='Montserrat-R' Tag='h2'>
							Название организации 3
						</UiTypography>
					</div>
				</SwiperSlide>
			</Swiper>
			{screenWidth >= MD_MID ? (
				<button className={clsx(cls.btn, cls.next_btn)} id={NEXT_EL}>
					<img src='/images/User/Home/Projects/arrow.svg' alt='Предыдущий' />
				</button>
			) : null}
		</div>
	)
}

export { Slider }
