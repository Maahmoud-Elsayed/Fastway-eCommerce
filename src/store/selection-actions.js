import { auth, db } from "../utils/firebase";
import { get, onValue, ref, set } from "firebase/database";
import { selectionActions } from "./selection-slice";

export const fetchSelectionData = () => {
  return async (dispatch) => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      const selectionData = JSON.parse(localStorage.getItem("selection"));

      dispatch(
        selectionActions.replaceSelection({
          language: selectionData?.language || "us",
          currency: selectionData?.currency || "USD",
        })
      );

      return;
    }

    const selectionRef = ref(db, "/users/" + userId + "/selection/");

    const fetchData = async () => {
      onValue(selectionRef, (snapshot) => {
        const data = (snapshot.val() && snapshot.val()) || {};
        dispatch(
          selectionActions.replaceSelection({
            language: data?.language || "us",
            currency: data?.currency || "USD",
          })
        );
        localStorage.setItem(
          "selection",
          JSON.stringify({
            language: data?.language || "us",
            currency: data?.currency || "USD",
          })
        );
      });
    };

    const snapshot = await get(selectionRef);
    const data = snapshot.val();

    if (!data) {
      const selectionData = JSON.parse(localStorage.getItem("selection"));
      if (selectionData) {
        dispatch(
          selectionActions.replaceSelection({
            language: selectionData?.language || "us",
            currency: selectionData?.currency || "USD",
          })
        );
        await set(selectionRef, selectionData);
      }
      return;
    }

    await fetchData();
  };
};

export const sendSelectionData = (selection) => {
  return async () => {
    const userId = auth.currentUser?.uid;

    if (!userId) {
      localStorage.setItem(
        "selection",
        JSON.stringify({
          language: selection.language || "us",
          currency: selection.currency || "USD",
        })
      );
      return;
    }

    const sendRequest = async () => {
      await set(ref(db, "/users/" + userId + "/selection/"), {
        language: selection.language || "us",
        currency: selection.currency || "USD",
      });
    };

    await sendRequest();
  };
};
