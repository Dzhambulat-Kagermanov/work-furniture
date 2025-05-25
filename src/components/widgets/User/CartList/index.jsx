import clsx from 'clsx'
import cls from './index.module.scss'
import { Item } from './Item'

const CartList = ({ className, ...props }) => {
	return (
		<ul className={clsx(cls.wrapper, className)} {...props}>
			<Item
				data={{
					id: 1,
					name: 'TEST',
					price: 241421,
					qnt: 4,
					type: 'Стул',
				}}
			/>
		</ul>
	)
}

export { CartList }
