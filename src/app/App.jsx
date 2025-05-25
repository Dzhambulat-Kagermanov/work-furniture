import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu'
import { CartScreen } from '@screens/User/Cart'

function App() {
	return (
		<Routes>
			<Route element={<HeaderFooterBurgerMenu />}>
				<Route index element={<HomeScreen />} />
				<Route path='/cart' element={<CartScreen />} />
			</Route>
		</Routes>
	)
}

export default App
