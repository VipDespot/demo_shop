import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './ProductGelary.module.css';
import cx from 'classnames';
export const ProductGelary = ({ coverImgs = [] }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    return (_jsxs("div", { className: styles.galleryContainer, children: [_jsx("div", { className: styles.mainImageWrapper, children: _jsx("img", { src: coverImgs[selectedImage], alt: `Product view ${selectedImage + 1}`, className: styles.mainImage }) }), _jsx("div", { className: styles.thumbnails, children: coverImgs.map((img, index) => (_jsx("button", { className: cx(styles.thumbnail, {
                        [styles.active]: index === selectedImage,
                    }), onClick: () => setSelectedImage(index), children: _jsx("img", { src: img, alt: `Thumbnail ${index + 1}`, className: styles.thumbnailImage }) }, img || index))) })] }));
};
