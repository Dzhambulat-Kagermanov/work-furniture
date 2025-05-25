import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'

const CatalogBlock = ({ className, children, ...props }) => {
	return (
		<li className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='Montserrat-R'>{children}</UiTypography>
		</li>
	)
}

export { CatalogBlock }
