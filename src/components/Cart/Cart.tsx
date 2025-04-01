import styles from "./Cart.module.css";
import { useGetProductsQuery } from "../../services/getApi";
import { Text } from "@mantine/core";
import { Link } from "react-router";

export const Cart = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (!isLoading) {
    <div>Loading....</div>;
  }
  return (
    <>
      {products?.map((product) => (
        <Link className={styles.cart} to={`products/${product.id}`}>
          <div className={styles.content}>
            <div className={styles.cart_img}>
              <img src={product.images} className={styles.sofa}></img>
            </div>

            <div className={styles.information}>
              <div className={styles.information_content}>
                <Text c="black" size="md" ta="left" fw={700} ff="poppins">
                  {product.title}
                </Text>
                <Text size="sm" ta="left" fw={350} c="gray" ff="poppins">
                  {product.slug}
                </Text>
                <Text
                  size="lg"
                  c="balack"
                  fw={600}
                  ff="poppins"
                  className={styles.price}
                >
                  $ {product.price}
                </Text>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

{
  /* <div
          className={styles.cart}
          onClick={() => navigate(`products/${product.id}`)}
        >
          <div className={styles.content}>
            <div className={styles.cart_img}>
              <img src={product.images} className={styles.sofa}></img>
            </div>

            <div className={styles.information}>
              <div className={styles.information_content}>
                <Text c="black" size="md" ta="left" fw={700} ff="poppins">
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
        </div> */
}
