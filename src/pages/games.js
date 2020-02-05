import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Games = props => (
  <Layout>
    <SEO title="Zach Berglund - Games" />
    <h2 id="OWGTOWG" className="text-center no-dots" style={{marginBottom: "10px"}}>Open World Game: the Open World Game</h2>
    <h4 className="text-center title-dots">Morning Person Games</h4>
    <Video
        videoSrcURL="https://www.youtube.com/embed/N3wcgS6hs7Q"
        videoTitle="Open World Game: the Open World Game trailer"
        classes="video"
    />
    <p>A solo project of mine, Open World Game: the Open World Game is a satire that captures 
      the <i>purest</i> open world game experience.</p>
    <div className="center-buttons">
      <a className="corners btn" href="https://store.steampowered.com/app/1144110/Open_World_Game_the_Open_World_Game/" target="_blank"
       rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'steam']} />
          <span className="link-text"></span><span className="top-dots"/>
      </a>
      <a className="corners btn" href="https://morningpersongames.itch.io/owgtowg" target="_blank"
       rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'itch-io']} />
          <span className="link-text"></span><span className="top-dots"/>
      </a>          
    </div>
    <div className="line" />
    <h2 id="Metamorphic" className="text-center no-dots" style={{marginBottom: "10px"}}>Metamorphic</h2>
    <h4 className="text-center title-dots wide-title">Word of Mouth Indie Games</h4>
    <Video
      videoSrcURL="https://player.vimeo.com/video/324754152"
      videoTitle="Metamorphic trailer"
      classes="video vimeo"
    />
    <p>A puzzle-platformer full of atmosphere, magic sparks, and charming geological features.
       Metamorphic elaborates on the idea of an insurpassible barrier being the entire goal of a game
        rather than a stepping stone.</p>
    <p>I worked on the initial design process and the sound and music during development.</p>
    <div className="center-buttons">
      <a className="corners btn" href="https://wordofmouthgames.itch.io/metamorphic" target="_blank"
       rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'itch-io']} />
          <span className="link-text"></span><span className="top-dots"/>
      </a>          
    </div>
    <div className="line" />
    <h2 id="NonPlayer" className="text-center no-dots" style={{marginTop: "20px", marginBottom: "10px"}}>Non-Player Crafter</h2>
          <h4 className="text-center title-dots wide-title">Leaf Team</h4>
    <div className="image-container">
        <Img fluid={props.data.title.childImageSharp.fluid} /><span className="top-dots" />
    </div>
    <div className="col-3">
     <div className="image-container">
        <Img fluid={props.data.gem.childImageSharp.fluid} /><span className="top-dots" />
      </div>
      <div className="image-container">
        <Img fluid={props.data.sword.childImageSharp.fluid} /><span className="top-dots" />
      </div>
      <div className="image-container">
        <Img fluid={props.data.shop.childImageSharp.fluid} /><span className="top-dots" />
      </div>
    </div>
    <p>A collection of fast-paced minigames about repairing the many adeventurer's broken equipment. 
      The only thing worse than having weapon durability is being the person that has
       to fix the weapon durability.</p>
    <p>I helped design, develop, and implement the audio for Non-Player Crafter during Global Gam Jam 2020.</p>
  </Layout>
)
export default Games

export const pageQuery = graphql`
  query {
    gem: file(relativePath: { eq: "non-gem.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    title: file(relativePath: { eq: "non-title.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shop: file(relativePath: { eq: "non-shop.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sword: file(relativePath: { eq: "non-sword.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
