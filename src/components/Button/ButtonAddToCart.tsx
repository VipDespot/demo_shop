import { Button } from '@mantine/core';
import style from './Button.module.css';
import '../../index.css';
import { useDispatch } from 'react-redux';
import { addToBascet, removeToBasket } from '../../store/slice/basketSlice';
import { BasketItem } from '../../types/api/BasketTypes';

type ButtonAddToCartProps = {
  product: BasketItem;
};

export const ButtonAddToCart = ({ product }: ButtonAddToCartProps) => {
  const dispatch = useDispatch();
  return (
    <div className={style.buttons}>
      <Button
        variant="outline"
        color="var(--main-color-text)"
        size="md"
        onClick={() => dispatch(addToBascet(product))}
      >
        Add To Cart
      </Button>
      <Button
        variant="outline"
        color="var(--main-color-text)"
        size="md"
        onClick={() => dispatch(removeToBasket(product.id))}
      >
        Remove from Cart
      </Button>
    </div>
  );
};
