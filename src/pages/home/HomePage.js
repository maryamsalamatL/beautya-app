import styles from "./HomePage.module.scss";
import makeUpImg from "../../assets/mobile/Landing/make up image.png";
import skinCareImg from "../../assets/mobile/Landing/skincare image.png";
import giftsImg from "../../assets/mobile/Landing/gifts image.png";
const HomePage = () => {
  return (
    <section>
      <TopSec />
      <ProductsCategory />
    </section>
  );
};

export default HomePage;

const TopSec = () => {
  return (
    <div className={styles.topSec}>
      <p>Unlock Your Natural Glow </p>
      <button>Know More</button>
    </div>
  );
};

const ProductsCategory = () => {
  return (
    <div className={styles.productsCategory}>
      <h2>Products’ categories</h2>
      <div className={styles.categories}>
        <div>
          <img src={makeUpImg}></img>
          <span>make up</span>
        </div>
        <div>
          <img src={skinCareImg}></img>
          <span>skincare</span>
        </div>
        <div>
          <img src={giftsImg}></img>
          <span>Gifts & sets</span>
        </div>
      </div>
    </div>
  );
};
