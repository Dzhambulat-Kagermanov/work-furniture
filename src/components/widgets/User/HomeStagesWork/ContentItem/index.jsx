import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import { UiButton } from '@shared/ui/UiButton'
import cls from './index.module.scss'

const ContentItem = ({
	className,
	title,
	count,
	subtitle,
	btnText,
	...props
}) => {
	return (
		<li className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='JosefinSans-SB' Tag='h2' className={cls.title}>
				{count}. {title}
			</UiTypography>
			<UiTypography font='JosefinSans-R' Tag='h3' className={cls.subtitle}>
				{subtitle}
			</UiTypography>
			<UiButton className={clsx(cls.btn, cls.item_btn)}>
				<UiTypography font='JosefinSans-R'>{btnText}</UiTypography>
			</UiButton>
		</li>
	)
}

export { ContentItem }
