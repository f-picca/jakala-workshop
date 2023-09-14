"use client";
import {
  PricesContainer,
  Price,
  AddToCartButton,
} from "@commercelayer/react-components";
import styles from "../styles/productGrid.module.css";

function Product(props) {

  return (
    <div className="card">
      <img
        src={props.product.image.url}
        width="100%"
        className="card-img-top"
        alt={props.product.name}
      />
      <div class="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.description}</p>
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
    </div>
  );
}

export default Product;
