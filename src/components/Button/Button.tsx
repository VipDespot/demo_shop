import { Button } from "@mantine/core";
import style from "./Button.module.css";
export const Buttons = () => {
  return (
    <div className={style.buttons}>
      <Button variant="outline" color="rgba(31, 30, 30, 1)" size="md">
        Add To Cart
      </Button>
      <Button variant="outline" color="rgba(31, 30, 30, 1)" size="md">
        + Compare
      </Button>
    </div>
  );
};
