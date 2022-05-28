import styles from "../styles/SubscribeForm.module.css";

const SubscribeForm = () => {
  return (
    <form
      className={`${styles.form} col-12 col-sm-6  d-flex flex-column justify-content-center mt-5`}
    >
      <p className="text-center fw-bold mb-0">Buidl daily</p>
      <small className="text-center mb-2 fw-light text-muted">
        web3 and startups
      </small>
      <div className={styles.email}>
        <input
          className="p-1"
          type="email"
          placeholder="Type your email.."
        ></input>
        <button className={` ${styles.subscribe__Btn}`}>Subscribe</button>
      </div>
    </form>
  );
};

export default SubscribeForm;
