import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/User/Home'
import { HeaderFooterBurgerMenu } from '@layouts/HeaderFooterBurgerMenu'

function App() {
	return (
		<Routes>
			<Route path='/' element={<HeaderFooterBurgerMenu />}>
				<Route index element={<HomeScreen />} />
			</Route>
		</Routes>
	)
}

export default App
