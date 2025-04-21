import { useParams } from 'react-router';
import { useGetProductsByIdQuery } from '../../services/getApi';
import { ProductGelary } from '../ProductGelary/ProductGelary';
import style from './Passport.module.css';
import { Text } from '@mantine/core';
import { ButtonAddToCart } from '../Button/ButtonAddToCart';
import { CustomLoader } from '../CustomLoader';

export const Passport = () => {
  const productId = useParams();
  const { data: products } = useGetProductsByIdQuery(Number(productId.id));
  if (!products) return <CustomLoader/>;
  return (
    <div className={style.passport}>
      <div className={style.gallery}>
        <ProductGelary coverImgs={products?.images} />
      </div>
      <div className={style.description}>
        <div className={style.title}>
          <Text size="xl" fw={600} c="black" ff="poppins">
            {products?.title}
          </Text>
          <Text size="xl" fw={700} ff="poppins">
            $ {products?.price}
          </Text>
          <Text size="sm" c="gray" className={style.text} ff="poppins">
            {products?.description}
          </Text>
        </div>
        {products && <ButtonAddToCart product={{ ...products, quantity: 1 }} />}
      </div>
    </div>
  );
};
