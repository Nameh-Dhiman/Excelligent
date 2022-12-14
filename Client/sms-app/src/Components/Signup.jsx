import React, { useState, useRef } from "react";
import styles from "./Auth.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const formReset = useRef();

  const register = async () => {
    await axios
      .post("https://execelligent.herokuapp.com/api/auth/signup", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formReset.current.reset();
    register();
  };

  const changeHandler = (e) => {
    let input = e.target.name;
    setFormData({
      ...formData,
      [input]: e.target.value,
    });
  };

  return (
    <div className={styles.Container}>
      <p className={styles.PageTitle}>Signup</p>
      <form onSubmit={submitHandler} ref={formReset}>
        <div className={styles.InputContainer}>
          <input
            placeholder="Enter your name.."
            className={styles.ContainerInput}
            name="name"
            onChange={changeHandler}
          />
          <label className={styles.ContainerLabel}>Firstname</label>
        </div>
        <div className={styles.InputContainer}>
          <input
            placeholder="Enter your email.."
            className={styles.ContainerInput}
            name="email"
            onChange={changeHandler}
          />
          <label className={styles.ContainerLabel}>Email</label>
        </div>
        <div className={styles.InputContainer}>
          <input
            placeholder="Enter your password.."
            className={styles.ContainerInput}
            type="password"
            name="password"
            onChange={changeHandler}
          />
          <label className={styles.ContainerLabel}>Password</label>
        </div>
        <div className={styles.RadioContainer}>
          <p>Role:</p>
          <div>
            <input
              type="radio"
              name="role"
              value="student"
              onChange={changeHandler}
            />
            <label>Student</label>
            <input
              type="radio"
              name="role"
              value="instructor"
              onChange={changeHandler}
            />
            <label>Instructor</label>
          </div>
        </div>
        <input type="submit" value="Register" className={styles.Submit} />
      </form>
      <p className={styles.PageTitle} style={{ fontSize: "1rem" }}>
        Already a user?{" "}
        <span
          onClick={() => navigate("/signin")}
          style={{ color: "#308dfd", cursor: "pointer" }}
        >
          Signin
        </span>
      </p>
    </div>
  );
};

export default Signup;
