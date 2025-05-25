import { BurgerMenu } from '@modules/User/BurgerMenu'
import { Header } from '@modules/User/Header'
import { Outlet } from 'react-router-dom'

const HeaderFooterBurgerMenu = () => {
	return (
		<>
			<Header />
			<BurgerMenu />
			<Outlet />
		</>
	)
}

export { HeaderFooterBurgerMenu }
