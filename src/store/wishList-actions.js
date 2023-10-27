import { auth, db } from "../utils/firebase";
import { get, onValue, ref, set } from "firebase/database";
import { wishListActions } from "./wishList-slice";

export const fetchWishListData = () => {
  return async (dispatch) => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      const wishListData = JSON.parse(localStorage.getItem("wishList"));

      dispatch(
        wishListActions.replaceWishList({
          items: wishListData?.items || [],
          totalQuantity: wishListData?.totalQuantity || 0,
        })
      );

      return;
    }

    const wishListRef = ref(db, "/users/" + userId + "/wishList/");

    const fetchData = async () => {
      onValue(wishListRef, (snapshot) => {
        const data = (snapshot.val() && snapshot.val()) || {};
        dispatch(
          wishListActions.replaceWishList({
            items: data.items || [],
            totalQuantity: data.totalQuantity || 0,
          })
        );
      });
    };

    const snapshot = await get(wishListRef);
    const data = snapshot.val();

    if (!data || !data.items) {
      const wishListData = JSON.parse(localStorage.getItem("wishList"));
      if (wishListData && wishListData.items) {
        dispatch(
          wishListActions.replaceWishList({
            items: wishListData.items || [],
            totalQuantity: wishListData.totalQuantity,
          })
        );
        await set(wishListRef, wishListData);
        localStorage.removeItem("wishList");
      }
      return;
    }

    await fetchData();
  };
};

export const sendWishListData = (wishList) => {
  return async () => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      localStorage.setItem(
        "wishList",
        JSON.stringify({
          items: wishList.items,
          totalQuantity: wishList.totalQuantity,
        })
      );
      return;
    }

    const sendRequest = async () => {
      set(ref(db, "/users/" + userId + "/wishList/"), {
        items: wishList.items,
        totalQuantity: wishList.totalQuantity,
      });
    };

    await sendRequest();
  };
};
