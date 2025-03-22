import React from 'react'
import styles from './Cart.module.css'
import sofa from '../../images/demo_img.svg'
import { useGetProductsQuery } from '../../services/getApi'


export const Cart = () => {
 const {data: products, isLoading} = useGetProductsQuery()
if(!isLoading) {
  <div>Loading....</div>
}
 console.log(products)
  return (
    <>
    {
      products?.map((product) => <div className={styles.cart}>
      <div className={styles.content}>
        <div className={styles.cart_img}>
          <img src={product.images} className={styles.sofa}></img>
        </div>
      
        <div className={styles.information}>
            <div className={styles.information_content}>
                 <div className={styles.line_1}>{product.title}</div>
                <div className={styles.line_2}>{product.slug}</div>
                <div className={styles.line_3}>$ {product.price}</div>
            </div>
        </div>
      </div>
      </div> )
    }
      </>
  )
}


