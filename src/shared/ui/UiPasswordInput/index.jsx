import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '../UiTypography'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { UiButton } from '../UiButton'

const UiPasswordInput = ({
	Tag = 'div',
	label,
	className,
	errorMessage,
	inputClassName,
	contentClassName,
	isDefaultShowPassword = true,
	inputProps,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(
		isDefaultShowPassword || false
	)

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
				<input
					{...inputProps}
					type={showPassword ? 'text' : 'password'}
					className={clsx(cls.input, inputClassName)}
				/>
				<UiButton
					variant='ghost'
					type='button'
					className={cls.show_btn}
					onClick={() => {
						setShowPassword(cur => !cur)
					}}
				>
					{showPassword ? <Eye /> : <EyeOff />}
				</UiButton>
			</div>
			{errorMessage ? (
				<UiTypography className={cls.error_message} font='Inter-R'>
					{errorMessage}
				</UiTypography>
			) : null}
		</Tag>
	)
}

export { UiPasswordInput }
