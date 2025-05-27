import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiButton } from '@shared/ui/UiButton'
import cls from './index.module.scss'
import { showModalSelector, useModals } from '@shared/store/useModals'
import { HOME_STAGES_WORK_CONSULTATION_SLUG } from '@shared/constants/modals-slugs'

const ContentItem = ({
	className,
	title,
	count,
	subtitle,
	btnText,
	...props
}) => {
	const showModal = useModals(showModalSelector)
	return (
		<li className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='Montserrat-SB' Tag='h2' className={cls.title}>
				{count}. {title}
			</UiTypography>
			<UiTypography font='Montserrat-R' Tag='h3' className={cls.subtitle}>
				{subtitle}
			</UiTypography>
			<UiButton
				onClick={e => {
					showModal({ slug: HOME_STAGES_WORK_CONSULTATION_SLUG })
				}}
				className={clsx(cls.btn, cls.item_btn)}
			>
				<UiTypography font='Montserrat-R'>{btnText}</UiTypography>
			</UiButton>
		</li>
	)
}

export { ContentItem }
