import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HomeScreen as AdminHomeScreen } from '../screens/Admin/Home'
import { CatalogScreen as AdminCatalogScreen } from '../screens/Admin/Catalog'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu'
import { CartScreen } from '@screens/User/Cart'
import { CatalogScreen } from '@screens/User/Catalog'
import { ScrollToAnchor } from './HashLink'
import { ROUTES } from '@shared/constants/routes'
import { ProfileScreen } from '@screens/User/Profile'
import { SidebarLayout } from '@layouts/Sidebar'
import { Home3DFurnitureModal } from '@widgets/User/Home3DFurniturePreview'

function App() {
	return (
		<>
			<ScrollToAnchor />
			<Routes>
				<Route element={<HeaderFooterBurgerMenu />}>
					<Route path={ROUTES.HOME} element={<HomeScreen />} />
					<Route path={ROUTES.CART} element={<CartScreen />} />
					<Route path={ROUTES.PREVIEW} element={<Home3DFurnitureModal />} />
					<Route path='/catalogs/:slug' element={<CatalogScreen />} />
					<Route path={ROUTES.PROFILE} element={<ProfileScreen />} />
				</Route>
				<Route element={<SidebarLayout />}>
					<Route path={ROUTES.ADMIN.HOME} element={<AdminHomeScreen />} />
					<Route
						path='/admin/catalogs/:slug'
						element={<AdminCatalogScreen />}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App
