"use client";
import {
  PricesContainer,
  Price,
  AddToCartButton,
} from "@commercelayer/react-components";
import styles from "../styles/productGrid.module.css";

function Product(props) {

  return (
    <div className={styles.product}>
      <img
        src={props.product.image.url}
        width="100%"
        
        alt={props.product.name}
      />
      <h4 className={styles.productName}>{props.product.name}</h4>
      <p>{props.product.description}</p>
      <PricesContainer>
        <Price
          skuCode={props.product.code}
          className={styles.actualPriceInfo}
          compareClassName={styles.strikethroughPriceInfo}
        />
      </PricesContainer>
      <br/>
      <AddToCartButton className="me-3 btn btn-primary btn-dark" quantity={1} skuCode={props.product.code} />
    </div>
  );
}

export default Product;
