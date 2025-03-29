import { Cart } from "../../components/Cart/Cart";
import style from "./Home.module.css";
function Home() {
  return (
    <div className={style.content}>
      <Cart />
    </div>
  );
}

export default Home;
