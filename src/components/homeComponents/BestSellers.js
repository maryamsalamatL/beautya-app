import products from "../../data";
import { useState } from "react";
import styles from "./BestSellers.module.scss";
import { isDesktop, isTablet } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../common/Product";

const BestSellers = () => {
  const [nav1, setNav1] = useState();

  const bestSelledProducts = products.filter((p) =>
    p.tags.includes("best-sell")
  );

  return (
    <div className={styles.container}>
      <h1>our Best Sellers</h1>
      <Slider
        asNavFor={nav1}
        ref={(slider1) => setNav1(slider1)}
        slidesToShow={isDesktop ? 5 : isTablet ? 3 : 2}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
        speed={500}
      >
        {bestSelledProducts.map((product) => (
          <Product {...product} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSellers;
