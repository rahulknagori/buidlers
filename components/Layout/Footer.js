import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import { FaHome, FaTwitter } from "react-icons/fa";
import SubscribeForm from "../SubscribeForm";
const Footer = () => {
  return (
    <section className={`${styles.follow} container row m-auto`}>
      <div className="col-12 col-sm-4 mt-2">
        <p className="fw-bold">Follow us</p>
        <small className={`${styles.follow__buidler} p-1 pl-3`}>
          <FaTwitter size={14} className="ms-1 me-1 pb-1" />
          Follow @buidlerstribe
        </small>
      </div>
      <div
        className={`col-12 col-sm-8 d-flex mt-2 justify-content-end ${styles.discord__img} `}
      >
        <Image
          src="/BDT-discord.webp"
          width={220}
          height={70}
          alt="follow on discord"
        />
      </div>
      <div className={`${styles.investor__form} row`}>
        <div className="col-12 col-sm-6">
          <p className="fw-bold mt-5 mb-0">Startup/Investor Form</p>
          <p>Get feedback from someone at BuidlersTribe.</p>
          <a href="">Click here</a>
        </div>
        <SubscribeForm />
      </div>
      <div className={`${styles.underline} mt-5`}></div>
      <div className="container mt-4 d-flex justify-content-between mb-5">
        <a className="text-uppercase fs-5">Buidlers Tribe</a>
        <div className={`${styles.footer__home} p-2 pe-3 ps-3`}>
          <FaHome color="white" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
