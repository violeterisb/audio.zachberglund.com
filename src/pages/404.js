import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You hit another wall to see if it was fake. It wasn't :(.</p>
  </Layout>
)

export default NotFoundPage
