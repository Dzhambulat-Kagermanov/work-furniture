import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu/index'

function App() {
	return (
		<Routes>
			<Route element={<HeaderFooterBurgerMenu />}>
				<Route index element={<HomeScreen />} />
			</Route>
		</Routes>
	)
}

export default App
