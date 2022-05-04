import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, total, address, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay 13$ after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Name Surname
          </label>
          <input
            onChange={(e) => setCustomer(e.target.value)}
            type="text"
            placeholder="John Doe"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Phone Number
          </label>
          <input
            onChange={(e) => setCustomer(e.target.value)}
            type="text"
            placeholder="+84 123 123 456"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Address
          </label>
          <textarea
            rows={5}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Elton St. 505 NY"
            className={styles.textarea}
          />
        </div>
        <button onClick={handleClick} className={styles.button}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
