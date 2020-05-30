import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact Me</h2>
    <form
      name="contact"
      method="post"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
        aria-label="form name: contact"
      />
      <div className="name-and-email">
        <div class="input name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" aria-label="name" />
        </div>
        <div class="input email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" aria-label="email" />
        </div>
      </div>
      <div className="subject input">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" aria-label="subject" />
      </div>
      <div className="message input">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" aria-label="message" />
      </div>
      <button type="submit" className="corners btn">
        <span className="link-text">Submit</span>
        <span className="top-dots" />
      </button>
    </form>
  </Layout>
)

export default Contact
