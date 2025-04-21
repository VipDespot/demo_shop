import React from 'react';
import { useState } from 'react';
import styles from './ProductGelary.module.css';
import cx from 'classnames';

interface ProductProps {
  coverImgs?: string[];
}

export const ProductGelary: React.FC<ProductProps> = ({ coverImgs = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImageWrapper}>
        <img
          src={coverImgs[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnails}>
        {coverImgs.map((img, index) => (
          <button
            key={img || index}
            className={cx(styles.thumbnail, {
              [styles.active]: index === selectedImage,
            })}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
