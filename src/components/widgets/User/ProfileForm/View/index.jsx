import clsx from 'clsx'
import cls from './index.module.scss'

const View = ({ className, session: { name, password }, ...props }) => {
	return <section className={clsx(cls.wrapper, className)} {...props}></section>
}

export { View }
