import { getData } from './getData.js';

const wishList = ['idd005', 'idd015', 'idd026', 'idd077'];

const cartList = [
	{
		id: 'idd007',
		count: 3
	},
	{
		id: 'idd037',
		count: 1
	},
	{
		id: 'idd090',
		count: 2
	}
];

export const loadData = () => {

	if (location.search) {
		const search = decodeURI(location.search);
		const prop = search.split('=')[0].substring(1);
		const value = search.split('=')[1];

		if (prop == 's') {
			getData.search(value, (data) => console.log(data));
		} else if (prop === 'wishlist') {
			getData.wishList(wishList, (data) => console.dir({wishlist: data}));
		} else if (prop === 'cat' || prop === 'subcat'){
			getData.category(prop, value, (data) => console.log(data));
		}
	}

	if (location.hash) {
		getData.item(location.hash.substring(1), (data) => console.log(data));
	}

	if (location.pathname.includes('cart')) {
		getData.cart(cartList, (data) => console.log(data));
	}

	getData.catalog((data) => console.log(data));
	getData.subCatalog((data) => console.log(data));
};