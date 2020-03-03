import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact Me</h2>
    <form name="contact" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
      <div className="name-and-email">
        <div class="input name">
          <label>
            Name
          </label>
          <input type="text" name="name" id="name"/>
        </div>
        <div class="input email">
          <label>
            Email
          </label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
      <div className="subject input">
        <label>
          Subject
        </label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div className="message input">
        <label>
          Message
        </label>
        <textarea name="message" id="message" rows="5" />
      </div>
      <button type="submit" className="corners btn">
        <span className="link-text">Submit</span><span className="top-dots"/>
      </button>
    </form>
  </Layout>
)

export default Contact
