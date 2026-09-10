import { Routes } from '@angular/router';
import { StorePage } from "./store-page/store-page"
import { CartPage } from "./cart-page/cart-page"
import { EditPage } from "./edit-page/edit-page"

export const routes: Routes = [
	{
		path: '',
		component: StorePage,
	},
	{
		path: 'store',
		component: StorePage,
	},
	{
		path: 'cart',
		component: CartPage,
	},
	{
		path: 'edit',
		component: EditPage,
	},
];
