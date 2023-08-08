import styles from "./Product.module.scss";

const Product = ({ src, title, description, price }) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={src}></img>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Product;
