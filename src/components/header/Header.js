import styles from "./Header.module.scss";
import logo from "../../assets/mobile/logo.svg";
import { MdViewList, MdOutlineSearch, MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
const Header = () => {
  const [isListShow, setIsListShow] = useState(false);
  useEffect(() => {
    if (isDesktop || isTablet) {
      setIsListShow(false);
    }
  }, [isDesktop, isMobile, isTablet]);
  return (
    <header>
      <div className={styles.list}>
        <MdViewList
          className={styles.listIcon}
          onClick={() => setIsListShow(!isListShow)}
        />
        {(isListShow || isTablet || isDesktop) && <Navigation />}
      </div>
      <div className={styles.search}>
        <MdOutlineSearch />
      </div>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
      <div className={styles.language}>
        <MdLanguage />
        <p>US(EN)</p>
      </div>
    </header>
  );
};

export default Header;

const Navigation = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
