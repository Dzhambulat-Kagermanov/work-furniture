import clsx from 'clsx'
import cls from './index.module.scss'

const Image = ({ className, ...props }) => {
	return <div className={clsx(cls.wrapper, className)} {...props}></div>
}

export { Image }
