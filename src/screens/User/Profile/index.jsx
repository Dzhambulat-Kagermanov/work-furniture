import { ProfileView } from '@widgets/User/ProfileView'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import { ProfileAuth } from '@widgets/User/ProfileAuth'
import { ADMIN_USER } from '@shared/constants/env'

const ProfileScreen = props => {
	const session = useAuth(sessionSelector)
	console.log(ADMIN_USER)
	return (
		<UiContainer variant='shrink' className={cls.wrapper} {...props}>
			{session ? <ProfileView session={{ ...session }} /> : <ProfileAuth />}
		</UiContainer>
	)
}

export { ProfileScreen }
