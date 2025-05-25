import clsx from 'clsx'
import { UiButton } from '@shared/ui/UiButton'
import { SquarePen, Trash2 } from 'lucide-react'
import {
	editDataToSlugSelector,
	removeDataToSlugSelector,
	useMainData,
} from '@shared/store/useMainData'
import { UiTypography } from '@shared/ui/UiTypography'
import cls from './index.module.scss'
import { showModalSelector, useModals } from '@shared/store/useModals'

const SLUG = ''

const Item = ({ className, name, id, type, price, slug, ...props }) => {
	const showModal = useModals(showModalSelector)
	const removeDataToSlug = useMainData(removeDataToSlugSelector)
	const editDataToSlug = useMainData(editDataToSlugSelector)

	return (
		<li className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='Montserrat'>{name}</UiTypography>
			<UiTypography font='Montserrat' Tag='strong'>
				{price}
			</UiTypography>
			<UiTypography font='Montserrat'>{type}</UiTypography>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.edit_btn)}
				onClick={() => {
					showModal({ slug: SLUG })
				}}
			>
				<SquarePen />
			</UiButton>
			<UiButton
				variant='ghost'
				className={clsx(cls.btn, cls.delete_btn)}
				onClick={() => {
					removeDataToSlug({ slug, id })
				}}
			>
				<Trash2 />
			</UiButton>
		</li>
	)
}

export { Item }
