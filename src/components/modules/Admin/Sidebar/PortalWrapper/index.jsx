import { MD_MID } from '@shared/constants/breakpoints'
import { useScreen } from '@shared/hooks/useScreen'
import { createPortal } from 'react-dom'

const PortalWrapper = ({ children }) => {
	const { screenWidth } = useScreen()

	return (
		<>
			{screenWidth >= MD_MID
				? children
				: createPortal(children, document.getElementById('overlay-container'))}
		</>
	)
}

export { PortalWrapper }
