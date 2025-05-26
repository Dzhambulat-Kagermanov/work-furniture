import { UiContainer } from '@shared/ui/UiContainer'
import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiButton } from '@shared/ui/UiButton'
import cls from './index.module.scss'
import { ROUTES } from '@shared/constants/routes'
import { useNavigate } from 'react-router-dom'

const HomeHero = ({ className, ...props }) => {
	const navigate = useNavigate()

	return (
		<section className={cls.wrapper}>
			<UiContainer
				className={clsx(cls.container, className)}
				variant='shrink'
				{...props}
			>
				<div className={cls.content}>
					<UiTypography font='Montserrat-R' Tag='h1'>
						Офисная мебель для вашего стартапа
					</UiTypography>
					<UiTypography font='Montserrat-R' Tag='h2'>
						Создайте рабочее пространство, которое вам понравится. Наша мебель
						имеет значение.
					</UiTypography>
					<div className={cls.actions}>
						<UiButton
							onClick={() => {
								navigate(ROUTES.PREVIEW)
							}}
						>
							<UiTypography font='Montserrat-R'>
								Создай свой проект
							</UiTypography>
						</UiButton>
						<UiButton
							onClick={() => {
								navigate(ROUTES.CATALOG)
							}}
						>
							<UiTypography font='Montserrat-R'>В каталог</UiTypography>
						</UiButton>
					</div>
				</div>
			</UiContainer>
		</section>
	)
}

export { HomeHero }
