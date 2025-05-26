import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { useNavigate } from 'react-router-dom'

const CatalogBlock = ({ className, href, children, ...props }) => {
	const navigate = useNavigate()
	return (
		<li
			className={clsx(cls.wrapper, className)}
			onClick={() => {
				navigate(href)
			}}
			{...props}
		>
			<UiTypography font='Montserrat-R'>{children}</UiTypography>
		</li>
	)
}

export { CatalogBlock }
