import clsx from 'clsx'
import cls from './index.module.scss'
import { UiTypography } from '@shared/ui/UiTypography'
import { ContentItem } from '../ContentItem'
import { showModalSelector, useModals } from '@shared/store/useModals'
import { HOME_STAGES_WORK_CONSULTATION_SLUG } from '@shared/constants/modals-slugs'

const Content = ({ className, ...props }) => {
	const showModal = useModals(showModalSelector)

	return (
		<div className={clsx(cls.wrapper, className)} {...props}>
			<UiTypography font='Montserrat-R' className={cls.title}>
				Этапы работы
			</UiTypography>
			<ul className={cls.content}>
				<ContentItem
					onClick={() => {
						showModal({ slug: HOME_STAGES_WORK_CONSULTATION_SLUG })
					}}
					btnText='Проконсультироваться с дизайнером'
					count={1}
					subtitle='Давайте создадим ваше идеальное рабочее пространство! Мы вместе определим ваши потребности, оптимизируем планировку и составим подробный план вашего офиса'
					title='Создание индивидуального дизайна офиса.'
				/>
				<ContentItem
					btnText='Запланировать измерение'
					count={2}
					subtitle='Точные измерения имеют решающее значение для эффективного проектирования офиса. Мы тщательно измерим ваше пространство, чтобы обеспечить оптимальную функциональность'
					title='Подробный анализ пространства.'
				/>
				<ContentItem
					btnText='Узнать подробнее'
					count={3}
					subtitle='Беспроблемная доставка и профессиональная установка. Мы уделяем внимание каждой детали с особой тщательностью и точностью.'
					title='Доставка и сборка '
				/>
			</ul>
		</div>
	)
}

export { Content }
