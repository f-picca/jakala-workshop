"use client";
import {
  AddToCartButton,
} from "@commercelayer/react-components";
import styles from "../styles/productGrid.module.css";
import { useState, useEffect } from "react";
import useCommerceLayer from "@commercelayer/react-components/hooks/useCommerceLayer";


function Bundle(props) {
  const [bundle, setBundle] = useState();
  const { sdkClient } = useCommerceLayer();

  useEffect(() => {
    sdkClient().bundles
      .list({ include: ["skus"], filters: { code_eq: props.product.code } })
      .then((bundles) => {
        const [bundle] = bundles;
        setBundle(bundle);
      });
  },[]);
  
  return (
    <div className={styles.product}>
      <img
        src={props.product.image.url}
        width="100%"
        alt={props.product.name}
      />
      <h4 className={styles.productName}>{props.product.name}</h4>
      <p>{props.product.description}</p>

    <p className={styles.actualPriceInfo}>{bundle?.formatted_price_amount}</p>
    
     
      <AddToCartButton className="me-3 btn btn-primary btn-dark"
        bundleCode={props.product.code}
      />
    </div>
  );
}

export default Bundle;
