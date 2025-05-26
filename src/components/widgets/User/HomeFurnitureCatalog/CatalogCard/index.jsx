import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { useNavigate } from 'react-router-dom'

const CatalogCard = ({ className, image, children, href, ...props }) => {
	const navigate = useNavigate()

	return (
		<li
			onClick={() => {
				navigate(href)
			}}
			className={clsx(cls.wrapper, className)}
			style={{
				'--bg': `url(${image})`,
			}}
			{...props}
		>
			<UiTypography font='Montserrat-R'>{children}</UiTypography>
		</li>
	)
}

export { CatalogCard }
