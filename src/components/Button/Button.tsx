import { Button } from "@mantine/core";
import style from "./Button.module.css";
import "../../index.css";

export const Buttons = () => {
  return (
    <div className={style.buttons}>
      <Button variant="outline" color="var(--main-color-text)" size="md">
        Add To Cart
      </Button>
      <Button variant="outline" color="var(--main-color-text)" size="md">
        + Compare
      </Button>
    </div>
  );
};
