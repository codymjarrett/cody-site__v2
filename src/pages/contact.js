import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [status, setStatus] = useState({ status: "" })
  const [formedSubmitted, setFormedSubmitted] = useState(false)

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus({ status: "SUCCESS" })
        setFormedSubmitted(true)
      } else {
        setStatus({ status: "ERROR" })
        setFormedSubmitted(true)
      }
    }
    xhr.send(data)

    setTimeout(() => {
      document.getElementById("homeLink").click()
    }, 10000)
  }

  const template = () => {
    if (status.status === "" && formedSubmitted === false) {
      return (
        <div className="contact">
          <h1 className="contact__title">Contact Me</h1>
          <form
            className="contact__form"
            action="https://formspree.io/xrgzybbg"
            method="POST"
            onSubmit={submitForm}
          >
            <div className="contact__input">
              <label className="contact__label" htmlFor="fullName">
                Full Name
              </label>
              <div className="input-decorator">
                <input type="text" name="fullName" id="fullName" />
              </div>
            </div>

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
              <button class="btn btn--contact-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      )
    } else if (status.status === "SUCCESS" && formedSubmitted === true) {
      return (
        <div className="contact">
          <div className="contact-submission">
            <span className="contact-submission__icon" role="img" aria-label="thumbs up">👍</span>
            <p className="contact-submission__message">
              Thanks for the message!
            </p>
          </div>
        </div>
      )
    } else if (status.status === "ERROR" && formedSubmitted === true) {
      return (
        <div className="contact">
          <div className="contact-submission">
            <span className="contact-submission__icon" role="img" aria-label="thumbs down">👎</span>
            <p className="contact-submission__message">
              It looks like there was an error submitting, please try again.
            </p>
            <div class="contact-submission__button">
              <button
                className="btn btn--resubmit-btn"
                onClick={() => setStatus({ status: "" })}
              >
                <Link to="/">Resubmit</Link>
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <Layout>
      <SEO title="Contact Page" />
      {template()}
    </Layout>
  )
}

export default ContactPage
