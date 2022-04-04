import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-9dad6-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("No se encontraron datos del carrito.!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuality: cartData.totalQuality,
        })
      );

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Exito!",
          message: "Data del carrito consultada exitosamente...",
        })
      );
    } catch (error) {
      console.log("Error consultando data del carrito:", error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fallo la consulta de datos del carrito",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Enviando...",
        message: "Enviando datos del carrito",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-9dad6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuality: cart.totalQuality,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error enviando la data al backend!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Exito!",
          message: "Data del carrito enviada exitosamente...",
        })
      );
    } catch (error) {
      console.log("Error enviando data:", error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fallo el envio de data del carrito",
        })
      );
    }
  };
};
