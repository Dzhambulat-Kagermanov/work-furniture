import { UiContainer } from '@shared/ui/UiContainer'
import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiButton } from '@shared/ui/UiButton'
import cls from './index.module.scss'

const HomeHero = ({ className, ...props }) => {
	return (
		<section className={cls.wrapper}>
			<UiContainer
				className={clsx(cls.container, className)}
				variant='shrink'
				{...props}
			>
				<div className={cls.content}>
					<UiTypography font='JosefinSans-R' Tag='h1'>
						Офисная мебель для вашего стартапа
					</UiTypography>
					<UiTypography font='JosefinSans-R' Tag='h2'>
						Создайте рабочее пространство, которое вам понравится. Наша мебель
						имеет значение.
					</UiTypography>
					<div className={cls.actions}>
						<UiButton>
							<UiTypography font='JosefinSans-R'>
								Создай свой проект
							</UiTypography>
						</UiButton>
						<UiButton>
							<UiTypography font='JosefinSans-R'>В каталог</UiTypography>
						</UiButton>
					</div>
				</div>
			</UiContainer>
		</section>
	)
}

export { HomeHero }
