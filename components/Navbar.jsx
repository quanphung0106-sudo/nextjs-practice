import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0123 456 789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>homepage</li>
          <li className={styles.listItem}>products</li>
          <li className={styles.listItem}>menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}>events</li>
          <li className={styles.listItem}>blog</li>
          <li className={styles.listItem}>contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
