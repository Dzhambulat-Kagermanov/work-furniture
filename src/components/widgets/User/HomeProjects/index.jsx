import { UiContainer } from '@shared/ui/UiContainer'
import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import { UiTypography } from '@shared/ui/UiTypography'
import { Slider } from './Slider'
import cls from './index.module.scss'

const HomeProjects = ({ className, ...props }) => {
	return (
		<UiContainer
			id='our-projects-anchor'
			className={clsx(cls.wrapper, className)}
			{...props}
		>
			<UiTypography font='Montserrat' Tag='h2'>
				Реализованные проекты
			</UiTypography>
			<Slider />
			<UiButton className={clsx(cls.btn, cls.design)}>
				<UiTypography font='Montserrat-R'>Заказать дизайн-проект</UiTypography>
			</UiButton>
		</UiContainer>
	)
}

export { HomeProjects }
