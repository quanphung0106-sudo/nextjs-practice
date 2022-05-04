import styles from "../styles/AddButton.module.css";

const AddButton = ({setClose}) => {
  return (
    <div className={styles.mainAddButton}>
     <button onClick={() => setClose(false)} className={styles.button}>Add new Pizza!</button>
    </div>
  )
};

export default AddButton;
