import Product from "./Product";
//import products from "../products.json";
import styles from "../styles/productGrid.module.css";
import Bundle from "./Bundle";
import ZoneToZone from "./ZoneToZone";


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
      <ZoneToZone />
    </div>
  );
}

export default ProductGrid;

