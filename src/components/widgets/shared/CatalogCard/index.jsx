import clsx from 'clsx'
import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { formatPrice } from '@shared/lib/formatPrice'
import { UiFlipper } from '@shared/ui/UiFlipper'

const CatalogCard = ({
	className,
	name,
	type,
	price,
	image,
	frontClassName,
	backClassName,
	children,
	...props
}) => {
	return (
		<UiFlipper
			frontClassName={clsx(cls.front, frontClassName)}
			backClassName={clsx(
				cls.back,

				backClassName
			)}
			Tag='li'
			frontContent={
				<>
					<UiTypography font='Montserrat-SB' className={cls.name}>
						{name}
					</UiTypography>
					<UiTypography font='Montserrat-SB' Tag='strong' className={cls.price}>
						{formatPrice(price)} ₽
					</UiTypography>
					<UiTypography font='Montserrat' className={cls.catalog}>
						Каталог: {type}
					</UiTypography>
					{children}
				</>
			}
			backContent={
				<img className={cls.image} src={image} alt={`Картинка для "${name}"`} />
			}
			className={clsx(cls.wrapper, className)}
			{...props}
		/>
	)
}

export { CatalogCard }
