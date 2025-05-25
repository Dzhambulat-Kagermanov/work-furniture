import clsx from 'clsx'
import cls from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { UiTypography } from '@shared/ui/UiTypography'

const Item = ({ className, image, children, href, ...props }) => {
	const navigate = useNavigate()
	return (
		<li
			className={clsx(cls.wrapper, className)}
			onClick={() => {
				navigate(href)
			}}
			style={{
				'--bg': `url(${image})`,
			}}
			{...props}
		>
			<UiTypography font='Montserrat-R' Tag='h2'>
				{children}
			</UiTypography>
		</li>
	)
}

export { Item }
