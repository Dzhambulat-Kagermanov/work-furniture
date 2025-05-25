import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import clsx from 'clsx'
import { Content } from './Content'

const HomeStagesWork = ({ className, ...props }) => {
	return (
		<UiContainer
			variant='shrink'
			className={clsx(cls.wrapper, className)}
			{...props}
		>
			<Content className={cls.content} />
			<img
				src='/images/User/Home/StagesWork/illustration.png'
				alt='Этапы разработки'
			/>
		</UiContainer>
	)
}

export { HomeStagesWork }
