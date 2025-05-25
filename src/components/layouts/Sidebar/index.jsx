import { Sidebar } from '@modules/Admin/Sidebar'
import cls from './index.module.scss'
import { Outlet } from 'react-router-dom'

const SidebarLayout = () => {
	return (
		<main className={cls.wrapper}>
			<Sidebar />
			<Outlet />
		</main>
	)
}

export { SidebarLayout }
