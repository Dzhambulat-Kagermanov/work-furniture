import clsx from 'clsx'
import cls from './index.module.scss'

const UiContainer = ({
	variant,
	className,
	children,
	Tag = 'section',
	...props
}) => {
	return (
		<Tag
			className={clsx(
				cls.wrapper,
				{
					[cls.variant_expand]: variant === 'expand',
					[cls.variant_shrink]: variant === 'shrink',
				},
				className
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}

export { UiContainer }
