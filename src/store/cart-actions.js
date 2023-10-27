import { cartActions } from "./cart-slice";
import { auth, db } from "../utils/firebase";
import { get, onValue, ref, remove, set } from "firebase/database";

export const fetchCartData = () => {
  return async (dispatch) => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      const cartData = JSON.parse(localStorage.getItem("cart"));

      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [],
          totalQuantity: cartData?.totalQuantity || 0,
          totalPrice: Number(cartData?.totalPrice) || 0,
        })
      );

      return;
    }

    const cartRef = ref(db, "/users/" + userId + "/cart/");

    const fetchData = async () => {
      onValue(cartRef, (snapshot) => {
        const data = (snapshot.val() && snapshot.val()) || {};
        dispatch(
          cartActions.replaceCart({
            items: data.items || [],
            totalQuantity: data.totalQuantity || 0,
            totalPrice: Number(data.totalPrice) || 0,
          })
        );
      });
    };

    const snapshot = await get(cartRef);
    const data = snapshot.val();

    if (!data || !data.items) {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      if (cartData && cartData.items) {
        dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
            totalPrice: Number(cartData.totalPrice).toFixed(2),
          })
        );
        await set(cartRef, cartData);
        localStorage.removeItem("cart");
      }
      return;
    }

    await fetchData();
  };
};

export const sendCartData = (cart) => {
  return async () => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalPrice: Number(cart.totalPrice).toFixed(2),
        })
      );
      return;
    }

    const sendRequest = async () => {
      set(ref(db, "/users/" + userId + "/cart/"), {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
        totalPrice: Number(cart.totalPrice).toFixed(2),
      });
    };

    await sendRequest();
  };
};

export const deleteUserData = () => async () => {
  return async () => {
    const userId = auth.currentUser?.uid;

    const userRef = ref(db, `/users/${userId}`);

    const userSnapshot = await get(userRef);
    if (!userSnapshot.exists()) {
      return;
    }

    await remove(userRef);
  };
};
