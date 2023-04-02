import { FormattedMessage } from "react-intl";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import "./OrderForm.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

export const OrderForm = () => {
  const fileInputRef = useRef();
  const [placeholders, setPlaceholders] = useState({
    fullName: "ПІБ",
    companyName: "Назва компанії",
    phoneNumber: "Номер телефону",
    textarea: "Ваші побажання",
  });
  const locale = useSelector((state) => state.locale);
  useEffect(() => {
    if (locale === "us") {
      setPlaceholders({
        fullName: "Full name",
        companyName: "Company name",
        phoneNumber: "Phone number",
        textarea: "Your wishes",
      });
    }
    if (locale === "ru") {
      setPlaceholders({
        fullName: "ФИО",
        companyName: "Название компании",
        phoneNumber: "Номер телефона",
        textarea: "Ваши пожелания",
      });
    } else if (locale === "ua") {
      setPlaceholders({
        fullName: "ПІБ",
        companyName: "Назва компанії",
        phoneNumber: "Номер телефону",
        textarea: "Ваші побажання",
      });
    }
  }, [locale]);

  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    console.log(values);
    e.preventDefault();
    setErrors({});
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
    if (!values.message.trim()) {
      errors.message = "Name is required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ORDER,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Your message has been sent");
            setValues({
              name: "",
              email: "",
              company: "",
              phoneNumber: "",
              message: "",
            });
            setErrors({});
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };
  return (
    <>
      <div className="order__container">
        <form className="order" ref={form} onSubmit={sendEmail}>
          <h1 className="order__title">
            <FormattedMessage id="orderForm.title" />
            {/* Оформити замовлення */}
          </h1>
          <div className="order__inputs">
            <div className="input__container">
              <Input
                placeholder={placeholders.fullName}
                name="name"
                value={values.name}
                onChange={handleInputChange}
                style={{ border: errors.name ? "2px solid red" : "" }}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <Input
              placeholder={placeholders.companyName}
              name="company"
              value={values.company}
              onChange={handleInputChange}
            />
            <Input
              placeholder={placeholders.phoneNumber}
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <div className="input__container">
              <Input
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                style={{ border: errors.email ? "2px solid red" : "" }}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input__container">
              <textarea
                className="order__textarea"
                name="message"
                placeholder={placeholders.textarea}
                onChange={handleInputChange}
                style={{ border: errors.message ? "2px solid red" : "" }}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
          </div>
          <p className="order__text semibold">
            {/* Малюнок/креслення */}
            <FormattedMessage id="orderForm.text" />
          </p>
          <div className="order__buttons">
            <div className="order__input__container">
              <Button
                type="file"
                name="file"
                title={<FormattedMessage id="orderForm.button.select" />}
                background="var(--primary)"
                border="2px solid var(--secondary)"
                color="var(--secondary)"
                width="250px"
                onClick={handleFileButtonClick}
              />
              <input type="file" onChange={handleFileInputChange} ref={fileInputRef} style={{ display: "none" }} />
            </div>

            <Button
              title={<FormattedMessage id="form.button.send" />}
              background="#B1D036"
              color="var(--primary)"
              width="250px"
            />
          </div>
          <div className="order__security">
            <p className="order__security__title bold">
              <FormattedMessage id="orderForm.security.title" />
              {/* Ваша конфіденційність дуже важлива для нас. */}
            </p>
            <p className="order__security__text">
              <FormattedMessage id="orderForm.security.text" />
              {/* Ваша інформація не буде передана або продана третім сторонам. */}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
