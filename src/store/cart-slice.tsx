import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
	price: number;
	id: number;
	quantity: number;
	name: string;
	totalPrice: number;
}

interface State {
	itemsList: Item[];
	totalQuantity: number;
	showCart: boolean;
}

const initialState: State = {
	itemsList: [],
	totalQuantity: 0,
	showCart: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addToCart(
			state,
			action: PayloadAction<Pick<Item, "id" | "name" | "price">>
		) {
			const newItem = action.payload;
			const existingItem = state.itemsList.find(
				(item) => item.id === newItem.id
			);
			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			} else {
				state.itemsList.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					name: newItem.name,
					totalPrice: newItem.price,
				});
				state.totalQuantity++;
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			const id = action.payload;
			const existingItem = state.itemsList.find((item) => item.id === id);
			if (!existingItem) {
				return;
			}
			if (existingItem.quantity === 1) {
				state.itemsList = state.itemsList.filter(
					(item) => item.id !== id
				);
				state.totalQuantity--;
			} else {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			}
		},
		setShowCart(state) {
			state.showCart = !state.showCart;
		},
	},
});
export const cartActions = cartSlice.actions;
export default cartSlice;
