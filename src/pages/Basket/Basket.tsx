import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.css';
import { RootState } from '../../store/store';
import { clearBasket, removeToBasket } from '../../store/slice/basketSlice';
import { Button, Text } from '@mantine/core';
import miniBasket from '../../images/ant-design_delete-filled.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
                <img src={cart.images[0]} className={styles.image} />
                <Text w="130px" ff="poppins" size="16px" c="gray">
                  {cart.title}
                </Text>
                <Text ff="poppins" size="md" fw={900} c="gray">
                  $ {cart.price}
                </Text>
                <Text ff="poppins" ta="center" className={styles.quantity}>
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
              <Text ff="poppins" fw={600} size="28px">
                Cart Totals
              </Text>
              <Text ff="poppins" size="20px" fw={550}>
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
        <Text size="60px" ff="poppins" ta="center" pt="120px">
          Cart is empty{' '}
          <FontAwesomeIcon icon={faCartShopping} size="1x" color="#ccc" />
        </Text>
      )}
    </div>
  );
};
