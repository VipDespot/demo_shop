import styles from "./Cart.module.css";
import { useGetProductsQuery } from "../../services/getApi";
import { Text } from "@mantine/core";

export const Cart = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (!isLoading) {
    <div>Loading....</div>;
  }
  console.log(products);
  return (
    <>
      {products?.map((product) => (
        <div className={styles.cart}>
          <div className={styles.content}>
            <div className={styles.cart_img}>
              <img src={product.images} className={styles.sofa}></img>
            </div>

            <div className={styles.information}>
              <div className={styles.information_content}>
                <Text c="black" size="lg" ta="left" fw={700} ff="poppins">
                  {product.title}
                </Text>
                <Text size="sm" ta="left" fw={350} c="gray" ff="poppins">
                  {product.slug}
                </Text>
                <Text size="lg" c="balack" fw={600} ff="poppins">
                  $ {product.price}
                </Text>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
