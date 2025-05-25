import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu'
import { CartScreen } from '@screens/User/Cart'
import { CatalogItemScreen } from '@screens/User/CatalogItem'
import { ScrollToAnchor } from './HashLink'

function App() {
	return (
		<>
			<ScrollToAnchor />
			<Routes>
				<Route element={<HeaderFooterBurgerMenu />}>
					<Route index element={<HomeScreen />} />
					<Route path='/cart' element={<CartScreen />} />
					<Route path='/catalog/:slug' element={<CatalogItemScreen />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
