import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div className="contact">
      <h1 className="contact__title">Contact Me</h1>
      <form className="contact__form">
        <div className="contact__input">
          <div className="input-decorator">
          <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" id="fullName" />
          </div>
        </div>
        <div className="contact__input">
          <div className="input-decorator">
          <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" />
          </div>
        </div>
        <div className="contact__input">
          <div className="input-decorator">
          <label htmlFor="phone">Telephone #</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>
        <div className="contact__input">
          <div className="input-decorator">
          <label htmlFor="message">Message </label>
            <textarea type="text" name="message" id="message" />
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
