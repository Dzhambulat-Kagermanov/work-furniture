import { useParams } from 'react-router-dom'
import cls from './index.module.scss'
import { getSlugValue } from '@shared/lib/getSlugValue'
import { UiTypography } from '@shared/ui/UiTypography'
import { CatalogList } from '@widgets/User/CatalogList'
import { UiContainer } from '@shared/ui/UiContainer'

const CatalogScreen = props => {
	const slug = useParams()['slug']

	const titleValue = getSlugValue(slug)

	return (
		<UiContainer Tag='main' variant='shrink' className={cls.wrapper} {...props}>
			<UiTypography font='Montserrat-SB' Tag='h2' className={cls.title}>
				{titleValue}
			</UiTypography>
			<CatalogList slug={slug} />
		</UiContainer>
	)
}

export { CatalogScreen }
