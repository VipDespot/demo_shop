import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import { RootState } from "../../store/store";
import { clearBasket, removeToBasket } from "../../store/slice/basketSlice";
import { Button, Text } from "@mantine/core";
import miniBasket from "../../images/ant-design_delete-filled.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export const Basket = () => {
  const cartItem = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();
  const handleClick = (id: number | string) => {
    dispatch(removeToBasket(id));
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
                <Text
                  style={{
                    width: "130px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "gray",
                  }}
                >
                  {cart.title}
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color: "gray",
                    fontWeight: 900,
                  }}
                >
                  $ {cart.price}
                </Text>
                <Text className={styles.quantity} ff="poppins">
                  {cart.quantity}
                </Text>

                <Text ff="poppins" fw={800}>
                  $ {cart.quantity * cart.price}
                </Text>

                <img src={miniBasket} onClick={() => handleClick(cart.id)} />
              </div>
            ))}
          </div>
          <div className={styles.allTotal}>
            <div className={styles.total}>
              <Text
                style={{
                  fontFamily: "Popppins",
                  fontWeight: 600,
                  fontSize: "28px",
                }}
              >
                Cart Totals
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  wordSpacing: "10px",
                  fontWeight: 550,
                }}
              >
                Total: ${sumPrice}
              </Text>
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
        <Text
          style={{
            textAlign: "center",
            paddingTop: "120px",
            fontSize: "60px",
            fontFamily: "Poppins",
          }}
        >
          Cart is empty{" "}
          <FontAwesomeIcon icon={faCartShopping} size="1x" color="#ccc" />
        </Text>
      )}
    </div>
  );
};
