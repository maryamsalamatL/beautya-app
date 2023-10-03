import styles from "./HomePage.module.scss";
import makeUpImg from "../../assets/mobile/Landing/make up image.png";
import skinCareImg from "../../assets/mobile/Landing/skincare image.png";
import giftsImg from "../../assets/mobile/Landing/gifts image.png";
import analysisImg from "../../assets/mobile/Mobile/Landing/Frame 26085889.png";
import { isMobile, isTablet } from "react-device-detect";
import QRcode from "../../assets/Desktop/Desktop/Landing/image 83.png";
import BestSellers from "../../components/homeComponents/BestSellers";
const HomePage = () => {
  return (
    <section>
      <TopSec />
      <ProductsCategory />
      <SkinCareAnalysis />
      <BestSellers />
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
          <div className={styles.imgBox}>
            <img src={makeUpImg}></img>
          </div>
          <span>make up</span>
        </div>
        <div>
          <div className={styles.imgBox}>
            <img src={skinCareImg}></img>
          </div>
          <span>skincare</span>
        </div>
        <div>
          <div className={styles.imgBox}>
            <img src={giftsImg}></img>
          </div>
          <span>Gifts & sets</span>
        </div>
      </div>
    </div>
  );
};
const SkinCareAnalysis = () => {
  return (
    <div className={styles.analysis}>
      <div className={styles.imgBox}></div>
      <div className={styles.text}>
        <h1>NEW Virtual Skincare Analysis</h1>
        <p>
          Looking for a full skincare routine? Our NEW Virtual Skincare Analysis
          Tool evaluates your skin and provides the most personalized
          recommendations.
        </p>
        {isMobile || isTablet ? (
          <div className={styles.btnBox}>
            <button>answer a few questions</button>
            <button>take a selfie</button>
          </div>
        ) : (
          <div className={styles.largeScreenBtnBox}>
            <div>
              <h3>Scan with your phone to get started</h3>
              <span>or</span>
              <button>answer a few questions</button>
            </div>
            <div>
              <img src={QRcode}></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
