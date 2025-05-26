import { BurgerMenu } from '@modules/User/BurgerMenu'
import { Header } from '@modules/User/Header'
import { Footer } from '@modules/User/Footer'
import { Outlet } from 'react-router-dom'

const HeaderFooterBurgerMenu = () => {
	return (
		<>
			<Header />
			<BurgerMenu />
			<Outlet />
			<Footer />
		</>
	)
}

export { HeaderFooterBurgerMenu }
