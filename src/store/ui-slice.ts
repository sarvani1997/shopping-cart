import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
	message: string;
	type: string;
	open: boolean;
}
interface State {
	notification: Notification | null;
}

const uiSlice = createSlice({
	name: "ui",
	initialState: { notification: null },
	reducers: {
		showNotification(state: State, action: PayloadAction<Notification>) {
			state.notification = {
				message: action.payload.message,
				type: action.payload.type,
				open: action.payload.open,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
