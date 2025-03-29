import { useState } from "react";
import styles from "./ProductGelary.module.css";

interface ProductProps {
  img?: string[];
}

export const ProductGelary: React.FC<ProductProps> = ({ img = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImageWrapper}>
        <img
          src={img[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnails}>
        {img.map((img, index) => (
          <button
            key={img || index}
            className={`${styles.thumbnail} ${
              index === selectedImage ? styles.active : ""
            }`}
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

//{ images }: ProductProps
