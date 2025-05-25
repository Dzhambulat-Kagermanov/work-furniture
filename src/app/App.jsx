import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HomeScreen as AdminHomeScreen } from '../screens/Admin/Home'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu'
import { CartScreen } from '@screens/User/Cart'
import { CatalogItemScreen } from '@screens/User/CatalogItem'
import { ScrollToAnchor } from './HashLink'
import { ROUTES } from '@shared/constants/routes'
import { ProfileScreen } from '@screens/User/Profile'
import { SidebarLayout } from '@layouts/Sidebar'

function App() {
	return (
		<>
			<ScrollToAnchor />
			<Routes>
				<Route element={<HeaderFooterBurgerMenu />}>
					<Route path={ROUTES.HOME} element={<HomeScreen />} />
					<Route path={ROUTES.CART} element={<CartScreen />} />
					<Route path='/catalog/:slug' element={<CatalogItemScreen />} />
					<Route path={ROUTES.PROFILE} element={<ProfileScreen />} />
				</Route>
				<Route element={<SidebarLayout />}>
					<Route path={ROUTES.ADMIN.HOME} element={<AdminHomeScreen />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
