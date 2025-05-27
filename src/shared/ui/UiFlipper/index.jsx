import clsx from 'clsx'
import cls from './index.module.scss'
import { Image, ImageOff } from 'lucide-react'
import { useState } from 'react'

const UiFlipper = ({
	Tag = 'div',
	className,
	frontContent,
	backContent,
	frontClassName,
	backClassName,
	...props
}) => {
	const [mode, setMode] = useState(false)

	return (
		<Tag
			className={clsx(
				cls.flip_container,
				{
					[cls.is_back]: mode === true,
				},
				className
			)}
			{...props}
		>
			<div className={cls.flipper}>
				<div className={clsx(cls.front, frontClassName)}>
					{frontContent}
					<button
						className={cls.switch_mode}
						onClick={() => {
							setMode(true)
						}}
					>
						<Image />
					</button>
				</div>
				<div
					className={clsx(cls.back, backClassName)}
					onClick={() => {
						setMode(false)
					}}
				>
					{backContent}
					<button className={cls.switch_mode}>
						<ImageOff />
					</button>
				</div>
			</div>
		</Tag>
	)
}

export { UiFlipper }
