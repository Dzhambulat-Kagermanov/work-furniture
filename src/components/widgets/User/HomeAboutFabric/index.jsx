import { UiContainer } from '@shared/ui/UiContainer'
import cls from './index.module.scss'
import clsx from 'clsx'
import { Image } from './Image'
import { Content } from './Content'
import { Achievements } from './Achievements'

const HomeAboutFabric = ({ className, ...props }) => {
	return (
		<UiContainer
			id='about-us-anchor'
			variant='shrink'
			className={clsx(cls.wrapper, className)}
			{...props}
		>
			<Image />
			<Content />
			<Achievements />
		</UiContainer>
	)
}

export { HomeAboutFabric }
