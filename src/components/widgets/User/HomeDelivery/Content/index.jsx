import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'

const Content = ({ className, ...props }) => {
	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			<ul className={cls.list}>
				<li className={cls.item}>
					<UiTypography font='JosefinSans-SB'>
						● Бесплатная доставка при заказе дизайн-проекта «под ключ»
					</UiTypography>
				</li>
				<li className={cls.item}>
					<UiTypography font='JosefinSans-SB'>
						● Стандартная доставка отдельных товаров
					</UiTypography>
				</li>
				<li className={cls.item}>
					<UiTypography font='JosefinSans-SB'>
						● Самостоятельная доставка с нашего склада
					</UiTypography>
				</li>
			</ul>
			<UiTypography font='JosefinSans-R' className={cls.text}>
				Мы сотрудничаем с «OfficeMove Logistics», ведущим специалистом по
				доставке коммерческой мебели, чтобы обеспечить безопасную и
				своевременную доставку вашего заказа.
			</UiTypography>
		</div>
	)
}

export { Content }
