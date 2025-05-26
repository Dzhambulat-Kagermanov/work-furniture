import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '../UiTypography'

const UiTextarea = ({
	Tag = 'div',
	icon,
	label,
	className,
	errorMessage,
	inputClassName,
	contentClassName,
	textareaProps,
	...props
}) => {
	return (
		<Tag
			className={clsx(
				cls.wrapper,
				{
					[cls.error]: errorMessage !== undefined,
				},
				className
			)}
			{...props}
		>
			{label ? (
				<UiTypography className={cls.label} font='Inter-R'>
					{label}
				</UiTypography>
			) : null}
			<div className={clsx(cls.content, contentClassName)}>
				{icon}
				<textarea
					{...textareaProps}
					className={clsx(cls.input, inputClassName)}
				/>
			</div>
			{errorMessage ? (
				<UiTypography className={cls.error_message} font='Inter-R'>
					{errorMessage}
				</UiTypography>
			) : null}
		</Tag>
	)
}

export { UiTextarea }
