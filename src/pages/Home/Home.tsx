import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import style from './Home.module.css';
import { useState } from 'react';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '../../services/getApi';
import { Select } from '@mantine/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CustomLoader } from '../../components/CustomLoader';

export const Home = () => {
  const limitPage = useSelector(
    (state: RootState) => state.limited.productsPerPage
  );
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: page,
    categoryId: selectedCategory || undefined,
    limit: limitPage,
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
  if (!products) return <CustomLoader/>;
  return (
    <div className={style.content}>
      <Select
        label="Choose category"
        placeholder="All categories"
        onChange={handleCategoryChange}
        data={[
          { value: '', label: 'All Categories' },
          ...(categories?.map((c) => ({
            value: c.id.toString(),
            label: c.name,
          })) || []),
        ]}
        clearable
        allowDeselect
      />
      <Cart products={products} />
      <div className={style.paginationButtons}>
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
          disabled={products.length < limitPage}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
