import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useAppSelector } from "./store";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;

function App() {
  const cart = useAppSelector((state) => state.cart);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const notification = useAppSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    async function get() {
      try {
        dispatch(
          uiActions.showNotification({
            message: "requesting",
            type: "warning",
            open: true,
          })
        );
        const res = await axios.put(
          "https://shopping-cart-71830-default-rtdb.firebaseio.com/cartItems.json",
          cart
        );
        const data = res.data;
        dispatch(
          uiActions.showNotification({
            message: "successfull",
            type: "success",
            open: true,
          })
        );
      } catch (err) {
        dispatch(
          uiActions.showNotification({
            message: "Error",
            type: "error",
            open: true,
          })
        );
      }
    }
    get();
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
