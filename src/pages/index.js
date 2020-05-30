import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const IndexPage = props => (
  <Layout>
    <SEO title="Zach Berglund - Home" />
    <div className="image-container">
      <div className="header-in-image">
        <h1 className="text-center no-dots">Zach Berglund</h1>
        <h4 className="text-center title-dots">
          Sound Designer / Game Designer
        </h4>
      </div>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <span className="top-dots" />
    </div>
    <div className="col-3">
      <Link className="image-container" to="/games#OWGTOWG">
        <Img fluid={props.data.owgtowg.childImageSharp.fluid} />
        <span className="top-dots" />
        <div className="footer-in-image">
          <h5 className="text-center">View More</h5>
        </div>
      </Link>
      <Link className="image-container" to="/games#Metamorphic">
        <Img fluid={props.data.meta.childImageSharp.fluid} />
        <span className="top-dots" />
        <div className="footer-in-image">
          <h5 className="text-center">View More</h5>
        </div>
      </Link>
      <Link className="image-container" to="/games#NonPlayer">
        <Img fluid={props.data.non.childImageSharp.fluid} />
        <span className="top-dots" />
        <div className="footer-in-image">
          <h5 className="text-center">View More</h5>
        </div>
      </Link>
    </div>
    <h2 className="text-center title-dots">I specialize in:</h2>
    <h3 className="no-dots" style={{ paddingLeft: "0", marginBottom: "10px" }}>
      <ul className="horizontal-list" style={{ marginBottom: "0" }}>
        <li>Sound Design</li>
        <li>Audio Implementation</li>
        <li>Music Composition</li>
        <li>Foley &amp; Recording</li>
        <li>Game Design</li>
        <li>Unity Development</li>
      </ul>
    </h3>

    <p>
      From music composition to working in web development – I have a diverse
      background that I channel into game making. I solve the inter-disciplinary
      problems unique to game development, and deliver quality solutions in any
      individual discipline as well.
      <br />
      <br />I live with my wife in Los Angeles, California where we perpetually
      despair that we don't have a puppy.
    </p>
    <p className="text-center no-dots">
      You can can find some of my previous work below:
    </p>
    <div className="two-column">
      <Link className="corners btn column text-center" to="/games">
        <span className="link-text">
          <p>Games</p>
        </span>
        <span className="top-dots" />
      </Link>
      <Link className="corners btn column text-center" to="/audio">
        <span className="link-text">
          <p>Audio</p>
        </span>
        <span className="top-dots" />
      </Link>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    owgtowg: file(relativePath: { eq: "owgtowg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meta: file(relativePath: { eq: "metamorphic.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    non: file(relativePath: { eq: "non-gem.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
