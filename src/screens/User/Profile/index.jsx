import { ProfileView } from '@widgets/User/ProfileView'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'

const ProfileScreen = props => {
	const session = useAuth(sessionSelector)

	return (
		<UiContainer variant='shrink' className={cls.wrapper} {...props}>
			{/* {session ? <ProfileView {...session} /> : <></>} */}
			<ProfileView
				session={{
					name: '321321',
					password: 213231,
				}}
			/>
		</UiContainer>
	)
}

export { ProfileScreen }
