import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import clsx from 'clsx'
import { Content } from './Content'
import { useScreen } from '@shared/hooks/useScreen'
import { LG_MID } from '@shared/constants/breakpoints'

const HomeStagesWork = ({ className, ...props }) => {
	const { screenWidth } = useScreen()

	return (
		<UiContainer
			variant='shrink'
			className={clsx(cls.wrapper, className)}
			{...props}
		>
			<Content className={cls.content} />
			{screenWidth >= LG_MID ? (
				<img
					src='/images/User/Home/StagesWork/illustration.png'
					alt='Этапы разработки'
				/>
			) : null}
		</UiContainer>
	)
}

export { HomeStagesWork }
