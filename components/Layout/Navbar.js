import { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import { FaList } from "react-icons/fa";
const Navbar = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  useEffect(() => {
    showMobNav
      ? document.body.classList.add("bodyOverflow")
      : document.body.classList.remove("bodyOverflow");
  }, [showMobNav]);
  return (
    <nav
      className={`row mt-5 container m-auto ${
        showMobNav ? styles.nav__mob : ""
      }`}
    >
      <div
        onClick={() => setShowMobNav(false)}
        className={`${styles.close} d-none`}
      >
        Close <span>X</span>
      </div>
      <div className={`${styles.navbar} container d-flex`}>
        <a className={`${styles.brand} d-sm-block col-8 col-sm-12 col-md-2`}>
          <h1>BUIDLERS TRIBE</h1>
        </a>
        <ul
          className={`d-none d-sm-flex justify-content-around col-sm-8 col-md-10 $`}
        >
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>Our Startups</li>
          </a>

          <a>
            <li>Buidlers</li>
          </a>
          <a>
            <li>Investors</li>
          </a>
          <a>
            <li>Experts</li>
          </a>
          <a>
            <li>People</li>
          </a>
          <a>
            <li>values</li>
          </a>
        </ul>
        <div
          onClick={() => setShowMobNav(true)}
          className={`d-sm-none col-4 d-flex justify-content-end ${styles.menu__icon}`}
        >
          Menu <FaList className={styles.fa_menu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
