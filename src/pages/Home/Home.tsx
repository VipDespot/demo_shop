import { Cart } from "../../components/Cart/Cart";
import style from "./Home.module.css";
import { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../services/getApi";
import { Select } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const [page, setPage] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: page,
    categoryId: selectedCategory || undefined,
  });

  const { data: categories } = useGetCategoriesQuery();

  const handleCategoryChange = (value: string | null) => {
    setSelectedCategory(value ? parseInt(value) : null);
    setPage(1);
  };

  if (isLoading) {
    <div>Loading....</div>;
  }
  if (isError) return <div>Error loading products</div>;

  const handleToNext = () => {
    setPage((prev) => prev + 1);
  };
  const handleToPrev = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };
  if (!products) return <div>No Prod</div>;
  return (
    <div className={style.content}>
      <Select
        label="Choose category"
        placeholder="All categories"
        onChange={handleCategoryChange}
        data={[
          { value: "", label: "All Categories" },
          ...(categories?.map((c) => ({
            value: c.id.toString(),
            label: c.name,
          })) || []),
        ]}
        clearable
        allowDeselect
      />
      <Cart products={products} />
      <div className={style.btns}>
        <button
          className={style.btn}
          onClick={handleToPrev}
          disabled={page === 1}
        >
          ← Previous
        </button>
        <button
          className={style.btn}
          onClick={handleToNext}
          disabled={products.length < 12}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
