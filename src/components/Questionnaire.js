import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import Wizard, { Steps, Step } from "./Wizard";
import NextButton from "./NextButton";
import FieldWithError from "./FieldWithErrors";
import ImageChoice from "./ImageChoice";

import { Link } from "react-router-dom";
import original from "../assets/original.png";
import lastImage from "../assets/last-page.jpg";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const Schema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/)
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  file: Yup.string().required("Required"),
});

const initialState = {
  fullName: "",
  message: "",
  email: "",
  phone: "",
  selector: null,
};

export default function Questionnaire() {
  const [image, setImage] = useState({ src: "", value: -1 });
  const rdBtnClickHandler = (e, setFieldValue) =>
    setFieldValue("selector", e.target.value);
  return (
    <div className="questionnaire">
      <Formik
        validationSchema={Schema}
        initialValues={initialState}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({
          values,
          errors,
          touched,
          validateForm,
          setTouched,
          submitForm,
		  setFieldValue,
		  handleChange
        }) => (
          <Wizard>
            <Steps>
              {/* ------------------------------------------------------------------one-------- */}
              <Step>
                {({ next }) => (
                  <>
                    <div className="nav">
                      <Link to="/">
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </Link>
                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>

                    <div className="indicators-container">
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>

                    <h2>
                      What best describes the sector <br /> of your company?
                    </h2>
                    <div className="options-container-one">
                      <ul>
                        <li
                          className={
                            values.selector === "one" ? "liBorder" : ""
                          }
                        >
                          <input
                            type="radio"
                            id="option-one"
                            name="selector"
                            value="one"
                            onClick={(e) => rdBtnClickHandler(e, setFieldValue)}
                          />
                          <label for="option-one">OPTION ONE</label>

                          <div className="check"></div>
                        </li>

                        <li
                          className={
                            values.selector === "two" ? "liBorder" : ""
                          }
                        >
                          <input
                            type="radio"
                            id="option-two"
                            name="selector"
                            value="two"
                            onClick={(e) => rdBtnClickHandler(e, setFieldValue)}
                          />
                          <label for="option-two">OPTION TWO</label>

                          <div className="check">
                            <div className="inside"></div>
                          </div>
                        </li>

                        <li
                          className={
                            values.selector === "three" ? "liBorder" : ""
                          }
                        >
                          <input
                            type="radio"
                            id="option-three"
                            name="selector"
                            value="three"
                            onClick={(e) => rdBtnClickHandler(e, setFieldValue)}
                          />
                          <label for="option-three">OPTION THREE</label>

                          <div className="check">
                            <div className="inside"></div>
                          </div>
                        </li>
                        <li
                          className={
                            values.selector === "four" ? "liBorder" : ""
                          }
                        >
                          <input
                            type="radio"
                            id="option-four"
                            name="selector"
                            value="four"
                            onClick={(e) => rdBtnClickHandler(e, setFieldValue)}
                          />
                          <label for="option-four">OPTION FOUR</label>

                          <div className="check">
                            <div className="inside"></div>
                          </div>
                        </li>

                        <li
                          className={
                            values.selector === "none" ? "liBorder" : ""
                          }
                        >
                          <input
                            type="radio"
                            id="option-none"
                            name="selector"
                            value="none"
                            onClick={(e) => rdBtnClickHandler(e, setFieldValue)}
                          />
                          <label for="option-none">NOT LISTED</label>

                          <div className="check">
                            <div className="inside"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="next-question">
                      <NextButton
                        disabled={!values.selector}
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={[]}
                        className="next-question-button"
                        data-tooltip={values.selector ? "✔" : ""}
                        className={
                          !values.selector
                            ? "next-question-button"
                            : "next-question-button-active"
                        }
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              {/* -----------------------------------------------------------------------two------ */}
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h2>
                      In 50 words or less, <br /> Please give us some insight
                      into what you do.
                    </h2>
                    <div className="question2-input">
                      <textarea
                        errors={errors}
                        touched={touched}
                        name="message"
                        cols="100"
                        value={values.message}
                        rows="10"
                        placeholder="Please limit your answers to 50 words max"
                        className="textAreaCls"
                        onChange={(e) =>
                          setFieldValue("message", e.target.value)
                        }
                      />
                    </div>
                    <div className="next-question">
                      <NextButton
                        disabled={!values.message.length}
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["message"]}
						className="next-question-button"
						data-tooltip={values.message.length ? "✔" : ""}
                        className={
                          !values.message.length
                            ? "next-question-button"
                            : "next-question-button-active"
                        }
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              {/* ---------------------------------------------------------------------------------three-------------------- */}
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h2>What skills or services are you looking for?</h2>

                    <ImageChoice setImage={setImage} image={image} />

                    <div className="next-question">
                      <NextButton
                        disabled={image.value < 0}
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={[]}
                        className={
                          image.value < 0
                            ? "next-question-button"
                            : "next-question-button-active"
                        }
                        data-tooltip="✔"
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              {/* ----------------------------------------------------four--------------------------------------------- */}
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h2>
                      What best describes the sector <br /> of your company?
                    </h2>
                    <div className="page-four-container">
                      <label>
                        <span style={{display:values.fullName.length?'block':'none'}}>Full Name*</span>
                        <FieldWithError
                          errors={errors}
                          touched={touched}
                          name="fullName"
						  placeholder="Full Name"
						  onChange={handleChange}
                        />
                      </label>
                      <label>
					  <span style={{display:values.email.length?'block':'none'}}>Email Address*</span>
                        <FieldWithError
                          errors={errors}
                          touched={touched}
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </label>
                      <label>
					  <span style={{display:values.phone.length?'block':'none'}}> Telephone Number*</span>
                        <FieldWithError
                          errors={errors}
                          touched={touched}
                          name="phone"
                          placeholder="Telephone Number"
                        />
                      </label>
                      <label>
                        <select name="Via Telephone" id="" className="select">
                          <option disabled selected value="Via Telephone">
                            Telephone Number
                          </option>
                          <option value="Via Telephone">Via Telephone</option>
                          <option value="Via Email">Via Email</option>
                        </select>
                      </label>
                    </div>
                    <div className="next-question">
                      <NextButton
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["email", "phone", "fullName"]}
                        className="next-question-button"
                        data-tooltip="✔"
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              {/* ------------------------------------------------------------------------------last-------------------- */}
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator "></div>
                      <div className="indicator active-indicator"></div>
                    </div>
                    <div className="last-page-container">
                      <img src={lastImage} alt="last" />

                      <h2>We have everything we need to take flight.</h2>
                      <p>
                        Thank you for diving deeper! it makes a difference
                        <br /> knowing how we can help you. You can schedule a
                        call <br /> with us below or simply be redirected back
                        to our home.
                      </p>

                      <div className="last-page-buttons-container">
                        <a data-tooltip="☎" href="https://www.vaengad.se/">
                          <BsArrowLeft className="take-me-home-btn" />{" "}
                          <span>TAKE ME HOME</span>
                        </a>
                        <NextButton
                          setTouched={setTouched}
                          validateForm={validateForm}
                          next={next}
                          fields={["email", "phone"]}
                          className="last-page-btn"
                          data-tooltip="☎"
                        >
                          SCHEDULE YOUR CALL
                        </NextButton>
                      </div>
                    </div>
                  </>
                )}
              </Step>
              {/* ---------------------------------------------------------------------------------summary----------------------- */}
              <Step>
                {({ jump, previous }) => (
                  <div>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                    </div>
                    <h2>Summary</h2>
                    <ul>
                      {Object.entries(values).map((x, i) => (
                        <li key={x[0]}>
                          {x.join(": ")}
                          <button onClick={() => jump(i > 1 ? 2 : 1)}>
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <button onClick={submitForm}>Submit</button>
                    </div>
                    <div>
                      <button onClick={previous}>Back</button>
                    </div>
                  </div>
                )}
              </Step>
            </Steps>
          </Wizard>
        )}
      </Formik>
    </div>
  );
}
