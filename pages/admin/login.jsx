import axios from "axios";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <label>Login</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={styles.label}>Password</label>
        <input
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleClick} className={styles.button}>
          Login
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
