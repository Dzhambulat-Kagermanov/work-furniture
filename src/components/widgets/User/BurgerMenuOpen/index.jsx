import clsx from 'clsx'
import cls from './index.module.scss'
import { AlignJustify } from 'lucide-react'

const BurgerMenuOpen = ({ className, ...props }) => {
	return (
		<button className={clsx(cls.wrapper, className)} {...props}>
			<AlignJustify />
		</button>
	)
}

export { BurgerMenuOpen }
