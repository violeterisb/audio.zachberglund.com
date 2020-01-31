import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from "gatsby";

const IndexPage = props => (
  <Layout>
    <SEO title="Zach Berglund - Home" />      
      <div className="image-container">
        <div className="header-in-image">
          <h1 className="text-center no-dots" style={{marginBottom: "10px"}}>Zach Berglund</h1>
          <h4 className="text-center title-dots">Game Designer / Sound Designer</h4>
        </div>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} /><span className="top-dots" />
      </div>
      <p className="text-center no-dots">Welcome! You can take a look at my work here:</p>
      <div className="two-column">
        <Link activeClassName="active" className="text-center column corners btn" to="/games" >
          <span className="link-text"><p>Games</p></span><span className="top-dots"/>
        </Link>
        <Link activeClassName="active" className="text-center column corners btn" to="/audio" >
          <span className="link-text"><p>Audio</p></span><span className="top-dots"/>
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
  }
`;