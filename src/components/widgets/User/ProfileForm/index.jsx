import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import { sessionSelector, useAuth } from '@shared/store/useAuth'
import clsx from 'clsx'

const ProfileForm = ({ className, ...props }) => {
	const session = useAuth(sessionSelector)

	return (
		<UiContainer
			variant='shrink'
			className={clsx(cls.wrapper, className)}
			{...props}
		>
			{session ? <></> : <></>}
		</UiContainer>
	)
}

export { ProfileForm }
