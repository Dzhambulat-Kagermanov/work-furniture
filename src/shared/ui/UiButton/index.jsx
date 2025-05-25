import clsx from 'clsx'
import cls from './index.module.scss'

const UiButton = ({
	className,
	variant = 'fill',
	type = 'button',
	children,
	...props
}) => {
	return (
		<button
			type={type}
			className={clsx(
				cls.wrapper,
				{
					[cls.variant_fill]: variant === 'fill',
					[cls.variant_danger]: variant === 'danger',
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export { UiButton }
