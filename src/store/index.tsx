// import { createStore } from "redux";
// import { useDispatch } from "react-redux";

// interface State {
// 	counter: number;
// }

// type AppAction =
// 	| { type: "INC" }
// 	| { type: "DEC" }
// 	| { type: "ADD"; payload: number };

// const reducerFn = (state: State = { counter: 0 }, action: AppAction): State => {
// 	//has two parameters: state and action;
// 	// state is state which we provide
// 	// action has 2 propeties: type and payload
// 	// synchronous functiom
// 	// should not mutate original state

// 	if (action.type === "INC") {
// 		return { counter: state.counter + 1 };
// 	}

// 	if (action.type === "DEC") {
// 		return { counter: state.counter - 1 };
// 	}
// 	if (action.type === "ADD") {
// 		return { counter: state.counter + action.payload };
// 	}
// 	return state;
// };

// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;

// const store = createStore(reducerFn); // createStore reducer function as an aurgument

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		cart: cartSlice.reducer,
		ui: uiSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
