export const formatPrice = price => {
	let numStr = price.toString()

	return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
