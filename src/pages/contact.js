import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {

  const [status, setStatus] = useState("")


  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  
  }
  
  return (

  <Layout>
    <SEO title="Contact Page" />
    <div className="contact">
      <h1 className="contact__title">Contact Me</h1>
      <form className="contact__form" action="https://formspree.io/xrgzybbg"
        method="POST" onSubmit={submitForm}>
        <div className="contact__input">
          <label className="contact__label" htmlFor="fullName">
            Full Name
          </label>
          <div className="input-decorator">
            <input type="text" name="fullName" id="fullName" />
          </div>
        </div>
        {/* <div className="contact__input">
          <div className="input-decorator">
          <label className="contact__label" htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div> */}

        <div className="contact__input">
          <label className="contact__label" htmlFor="phone">
            Telephone #
          </label>
          <div className="input-decorator">
            <input type="tel" name="phone" id="phone" />
          </div>
        </div>
        <div className="contact__input">
          <label className="contact__label" htmlFor="Email">
            Email
          </label>
          <div className="input-decorator">
            <input type="email" name="Email" id="Email" />
          </div>
        </div>
        <div className="contact__input">
          <label className="contact__label" htmlFor="message">
            Message{" "}
          </label>
          <div className="input-decorator">
            <textarea type="text" name="message" id="message" />
          </div>
        </div>
        <div className="contact__input">
          <button class="contact__btn" type="submit">
            Send
          </button>
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : ""}
        {status === "ERROR" ? <p>Opps there was an error</p> : "" }
      </form>
    </div>
  </Layout>
  )
}



export default ContactPage
