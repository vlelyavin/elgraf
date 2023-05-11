import { FormattedMessage } from "react-intl";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import "./Partnership.css";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Partnership = () => {
  const [placeholders, setPlaceholders] = useState({
    fullName: "ПІБ",
    companyName: "Назва компанії",
    phoneNumber: "Номер телефону",
  });
  const locale = useSelector((state) => state.locale);
  useEffect(() => {
    if (locale === "us") {
      setPlaceholders({
        fullName: "Full name",
        companyName: "Company name",
        phoneNumber: "Phone number",
      });
    }
    if (locale === "ru") {
      setPlaceholders({
        fullName: "ФИО",
        companyName: "Название компании",
        phoneNumber: "Номер телефона",
      });
    } else if (locale === "ua") {
      setPlaceholders({
        fullName: "ПІБ",
        companyName: "Назва компанії",
        phoneNumber: "Номер телефону",
      });
    }
  }, [locale]);
  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors({});
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Name is required";
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
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_PARTNERSHIP,
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
            });
            setErrors({});
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <Container>
      <form className="partnership" ref={form} onSubmit={sendEmail}>
        <h2 className="partnership__title">
          <FormattedMessage id="offices.partnership.title" />
        </h2>
        <h3 className="partnership__quote">
          <FormattedMessage id="offices.partnership.quote" />
        </h3>
        <div className="partnership__inputs">
          <div className="partnership__inputs__column">
            <div className="input__container">
              <Input
                type="text"
                placeholder={placeholders.fullName}
                value={values.name}
                onChange={handleInputChange}
                name="name"
                style={{ border: errors.name ? "2px solid red" : "" }}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <Input
              type="text"
              placeholder={placeholders.companyName}
              value={values.company}
              onChange={handleInputChange}
              name="company"
            />
          </div>
          <div className="partnership__inputs__column">
            <div className="input__container">
              <Input
                type="text"
                placeholder={placeholders.phoneNumber}
                value={values.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
              />
            </div>
            <div className="input__container">
              <Input
                type="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Email"
                name="email"
                style={{ border: errors.email ? "2px solid red" : "" }}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
        </div>
        <div className="partnership__button__container">
          <Button
            title={<FormattedMessage id="form.button.send" />}
            width="250px"
            color="var(--primary)"
            background="#B1D036"
            fontSize="1rem"
          />
        </div>
      </form>
    </Container>
  );
};
