export const useBodyClassName = () => {
	return ({ className, type }) => {
		if (type === 'add') document.body.classList.add(className)
		if (type === 'remove') document.body.classList.remove(className)
	}
}
