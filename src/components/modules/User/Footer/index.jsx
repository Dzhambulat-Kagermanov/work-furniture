import clsx from 'clsx'
import cls from './index.module.scss'

const Footer = ({ className, ...props }) => {
	return <footer className={clsx(cls.wrapper, className)} {...props}></footer>
}

export { Footer }
