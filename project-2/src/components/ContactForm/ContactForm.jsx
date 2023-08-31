import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { BiMessage } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  const [name, setName] = useState("dimpu");
  const [email, setEmail] = useState("dimpu@gmail.com");
  const [text, setText] = useState("isgood");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contactform}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiMessage fontSize="24px" />}
          />
          <Button
            // onClick={onViaCall}
            text="VIA CALL"
            icon={<FiPhone fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
