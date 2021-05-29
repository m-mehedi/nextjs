import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const PictureList = ( {items, loading}) => {
if(loading){
    return <h2>Loading...</h2>;
}


    return (
        <div className={styles.container}>
                {items.map(item=>(
                    <Link href={`/products/${item.id}`}>
                    <div className={styles.product__Row}>
                    <div key={item.id} className={styles.product}>
                    <div className={styles.product__ColImg}><img src={item.urls.regular} /></div>
                    <div className={styles.product__Col}>{item.alt_description}</div>
                    </div>
                    </div>
                    </Link>
                ))}
        </div>
    );
};

export default PictureList
