import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import { RootState } from "../../store/store";
import { clearBasket, removeToBasket } from "../../store/slice/basketSlice";
import { Button, Text } from "@mantine/core";
import miniBasket from "../../images/ant-design_delete-filled.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <FontAwesomeIcon icon={faCartShopping} size="4x" color="#ccc" />
      <p>Корзина пустая</p>
    </div>
  );
};

export const Basket = () => {
  const cartItem = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();
  const handleClick = (id: number | string) => {
    if (window.confirm("Вы уверены, что хотите удалить товар?")) {
      dispatch(removeToBasket(id));
    }
  };
  const sumPrice = cartItem.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  console.log(sumPrice);
  return (
    <div className={styles.basket}>
      {cartItem.length !== 0 ? (
        <div className={styles.cart}>
          <div className={styles.cart_content}>
            <Text ff="poppins" fw={500}>
              <div className={styles.header}>
                <li className={styles.headerProduct}>Product</li>
                <li className={styles.headerPrice}>Price</li>
                <li className={styles.headerQuantity}>Quantity</li>
                <li className={styles.headerSubtotal}>Subtotal</li>
              </div>
            </Text>
            {cartItem.map((cart) => (
              <div className={styles.products}>
                <li>
                  <img src={cart.images[0]} className={styles.image} />
                </li>
                <li className={styles.title}>{cart.title}</li>
                <li className={styles.price}>$ {cart.price}</li>
                <li className={styles.quantity}>{cart.quantity}</li>
                <li className={styles.subtotal}>
                  $ {cart.quantity * cart.price}
                </li>
                <img src={miniBasket} onClick={() => handleClick(cart.id)} />
              </div>
            ))}
          </div>
          <div className={styles.allTotal}>
            <div className={styles.total}>
              <Text ff="poppins" className={styles.totalTitle}>
                Cart Totals
              </Text>
              <div className={styles.totalPrice}>Total: ${sumPrice}</div>
              <Button
                variant="outline"
                color="green"
                size="lg"
                className={styles.btn}
              >
                Pay
              </Button>
            </div>
            <Button
              variant="outline"
              color="rgba(115, 112, 32, 1)"
              size="lg"
              onClick={() => dispatch(clearBasket())}
            >
              Remove all products
            </Button>
          </div>
        </div>
      ) : (
        <h1 className={styles.isEmty}>
          Cart is empty {" "}
          <FontAwesomeIcon icon={faCartShopping} size="1x" color="#ccc" />
        </h1>
      )}
    </div>
  );
};
