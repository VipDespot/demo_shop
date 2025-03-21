import React from 'react'
import styles from './Cart.module.css'
import sofa from '../../images/demo_img.svg'
import { useGetProductsQuery } from '../../services/getApi'
import type { Product } from '../../types/api/Api.Products'



function Cart() {
 const getProducts = () => {
  const {data, error, isLoading} = useGetProductsQuery()
 }
 

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        <div className={styles.cart_img}>
          <img src={sofa} className={styles.sofa}/>
        </div>

        <div className={styles.information}>
            <div className={styles.information_content}>
                 <div className={styles.line_1}></div>
                <div className={styles.line_2}>Stylish cafe chair</div>
                <div className={styles.line_3}>Rp 2.500.000</div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Cart