import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { uiActions } from "../store/ui-slice";

export default function Notification({ type, message }) {
	const dispatch = useDispatch();
	const notification = useAppSelector((state) => state.ui.notification);
	const handleClose = () => {
		dispatch(uiActions.showNotification({ open: false }));
	};
	return (
		<div>
			{notification.open && (
				<Alert onClose={handleClose} severity={type}>
					{message}
				</Alert>
			)}
		</div>
	);
}
