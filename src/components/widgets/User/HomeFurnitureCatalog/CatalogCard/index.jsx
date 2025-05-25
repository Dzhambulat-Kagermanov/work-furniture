import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'

const CatalogCard = ({ className, image, children, ...props }) => {
	return (
		<li
			className={clsx(cls.wrapper, className)}
			style={{
				'--bg': `url(${image})`,
			}}
			{...props}
		>
			<UiTypography font='JosefinSans-R'>{children}</UiTypography>
		</li>
	)
}

export { CatalogCard }
