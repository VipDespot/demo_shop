import styles from "./Cart.module.css";
import { Text } from "@mantine/core";
import { Link } from "react-router";
import { Product } from "../../types/api/Api.Products";

interface ProductProps {
  products?: Product[]
}
export const Cart: React.FC<ProductProps> = ({products = [] }) => {
  console.log(products[0].images)
  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <Link className={styles.cart} to={`/products/${product.id}`}>
          <div className={styles.content}>
            <div className={styles.cart_img}>
              <img src={product.images[0]} className={styles.sofa}></img>
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
    </div>
  );
};
