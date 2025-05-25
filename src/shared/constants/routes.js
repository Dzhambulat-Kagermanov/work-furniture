export const ROUTES = {
	HOME: '/',
	PROFILE: '/profile',
	CART: '/cart',
	CATALOG: '/#catalog-anchor',
	CATALOG_ITEM: '/catalog',
	ABOUT_US: '/#about-us-anchor',
	OUR_PROJECTS: '/#our-projects-anchor',
	DELIVERY: '/#delivery-anchor',
	ADMIN: { HOME: '/admin', CATALOG: slug => `/admin/catalogs/${slug}` },
}
