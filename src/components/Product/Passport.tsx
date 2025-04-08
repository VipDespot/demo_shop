import { useParams } from "react-router";
import { useGetProductsByIdQuery } from "../../services/getApi";
import { ProductGelary } from "../ProductGelary/ProductGelary";
import style from "./Passport.module.css";
import { Text } from "@mantine/core";
import { Buttons } from "../Button/Button";

export const Passport = () => {
  const productId = useParams();
  const { data: paramets } = useGetProductsByIdQuery(Number(productId.id));
  return (
    <div className={style.passport}>
      <div className={style.gallery}>
        <ProductGelary coverImgs={paramets?.images} />
      </div>
      <div className={style.description}>
        <div className={style.title}>
          <Text size="xl" fw={600} c="black" ff="poppins">
            {paramets?.title}
          </Text>
          <Text size="xl" fw={700} ff="poppins">
            $ {paramets?.price}
          </Text>
          <Text size="sm" c="gray" className={style.text} ff="poppins">
            {paramets?.description}
          </Text>
        </div>
        {paramets && <Buttons product={{ ...paramets, quantity: 1 }} />}
      </div>
    </div>
  );
};
