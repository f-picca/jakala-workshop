import Product from "./Product";
import styles from "../styles/productGrid.module.css";
import Bundle from "./Bundle";


function ProductGrid(props) {
  return (
    <div className={styles.wrapper}>
      {props.products.map((product) => {
        return product.is_bundle ? (
          <Bundle key={product.code} product={product} />
        ) : (
          <Product key={product.code} product={product} />
        );
      })}
    </div>
  );
}

export default ProductGrid;

