import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);

  //extraOptions là 1 mảng chứa những extra bên dưới
  const [extraOptions, setExtraOptions] = useState([]);

  //extra bao gồm name và price của extra đó
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    // trả lại những extra đã có và tạo mới extra
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dw0r3ayk2/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        prices,
        desc,
        extraOptions,
        img: url,
      };  
      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an item</label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name=""
            id=""
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            name=""
            id=""
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleExtraInput}
            />
            <button className={styles.button} onClick={handleExtra}>
              Add extra
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text} - {option.price}
              </span>
            ))}
          </div>
        </div>
        <button onClick={handleCreate} className={styles.addButton}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
