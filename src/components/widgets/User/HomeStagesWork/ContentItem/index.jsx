import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiButton } from '@shared/ui/UiButton'
import cls from './index.module.scss'
import { ROUTES } from '@shared/constants/routes'
import { useNavigate } from 'react-router-dom'

const ContentItem = ({
	className,
	title,
	count,
	subtitle,
	btnText,
	...props
}) => {
	const navigate = useNavigate()
	return (
		<li className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='Montserrat-SB' Tag='h2' className={cls.title}>
				{count}. {title}
			</UiTypography>
			<UiTypography font='Montserrat-R' Tag='h3' className={cls.subtitle}>
				{subtitle}
			</UiTypography>
			<UiButton
				onClick={() => {
					navigate(ROUTES.PREVIEW)
				}}
				className={clsx(cls.btn, cls.item_btn)}
			>
				<UiTypography font='Montserrat-R'>{btnText}</UiTypography>
			</UiButton>
		</li>
	)
}

export { ContentItem }
