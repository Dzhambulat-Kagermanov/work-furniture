import clsx from 'clsx'
import cls from './index.module.scss'

const CatalogEditForm = ({ className, ...props }) => {
	return <form className={clsx(cls.wrapper, className)} {...props}></form>
}

export { CatalogEditForm }
