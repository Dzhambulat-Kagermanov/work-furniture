import clsx from 'clsx'
import cls from './index.module.scss'

const UiTypography = ({
	font,
	Tag = 'p',
	className,
	style,
	children,
	...props
}) => {
	const FONT_INFO = font.split('-')
	let WEIGHT = 400

	switch (FONT_INFO[1]) {
		case 'T':
			WEIGHT = 100
			break
		case 'EL':
			WEIGHT = 200
			break
		case 'L':
			WEIGHT = 300
			break
		case 'R':
			WEIGHT = 400
			break
		case 'M':
			WEIGHT = 500
			break
		case 'SB':
			WEIGHT = 600
			break
		case 'B':
			WEIGHT = 700
			break
		case 'EB':
			WEIGHT = 800
			break
		case 'BL':
			WEIGHT = 900
			break
		case 'HE':
			WEIGHT = 1000
			break
	}

	return (
		<Tag
			className={clsx(cls.wrapper, className)}
			style={{
				'--font': FONT_INFO[0],
				'--weight': WEIGHT,
				...style,
			}}
			{...props}
		>
			{children}
		</Tag>
	)
}

export { UiTypography }
