import clsx from 'clsx'
import cls from './index.module.scss'

const BurgerMenu = ({ className, ...props }) => {
	return <section className={clsx(cls.wrapper, className)} {...props}></section>
}

export { BurgerMenu }
