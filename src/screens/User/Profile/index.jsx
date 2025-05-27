import { ProfileView } from '@widgets/User/ProfileView'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import { ProfileAuth } from '@widgets/User/ProfileAuth'

const ProfileScreen = props => {
	const session = useAuth(sessionSelector)

	return (
		<UiContainer variant='shrink' className={cls.wrapper} Tag='main' {...props}>
			{session ? <ProfileView session={{ ...session }} /> : <ProfileAuth />}
		</UiContainer>
	)
}

export { ProfileScreen }
