import clsx from 'clsx'
import cls from './index.module.scss'

const CatalogList = ({ className, ...props }) => {
	return <ul className={clsx(cls.wrapper, className)} {...props}></ul>
}

export { CatalogList }
