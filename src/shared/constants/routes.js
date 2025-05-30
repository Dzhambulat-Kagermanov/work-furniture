export const ROUTES = {
	HOME: '/',
	PREVIEW: '/preview',
	PROFILE: '/profile',
	CART: '/cart',
	CATALOG: '/#catalog-anchor',
	CATALOG_ITEM: slug => `/catalogs/${slug}`,
	ABOUT_US: '/#about-us-anchor',
	OUR_PROJECTS: '/#our-projects-anchor',
	DELIVERY: '/#delivery-anchor',
	ADMIN: { HOME: '/admin', CATALOG: slug => `/admin/catalogs/${slug}` },
}
