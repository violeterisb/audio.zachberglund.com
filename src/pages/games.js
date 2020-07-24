import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Games = props => (
  <Layout>
    <SEO title="Video Games Made With This Nerd" />
    <h2
      id="OWGTOWG"
      className="text-center no-dots"
      style={{ marginBottom: "10px" }}
    >
      Open World Game: the Open World Game
    </h2>
    <h4 className="text-center title-dots">Morning Person Games</h4>
    <Video
      videoSrcURL="https://www.youtube.com/embed/N3wcgS6hs7Q"
      videoTitle="Open World Game: the Open World Game trailer"
      classes="video"
      styles={{ marginBottom: "10px" }}
    />
    <h5 className="no-dots" style={{ paddingLeft: "0", marginBottom: "10px" }}>
      <ul
        className="horizontal-list one-line-list"
        style={{ marginBottom: "0" }}
      >
        <li>Unity</li>
        <li>Wwise</li>
        <li>Sound Design</li>
        <li>Music</li>
        <li>Audio Implementation</li>
        <li>Design</li>
        <li>Development</li>
      </ul>
    </h5>
    <p>
      A solo project of mine, Open World Game: the Open World Game is a satire
      that captures the <i>purest</i> open world game experience.
    </p>
    <div className="center-buttons">
      <a
        className="corners btn"
        href="https://store.steampowered.com/app/1144110/Open_World_Game_the_Open_World_Game/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "steam"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
      <a
        className="corners btn"
        href="https://morningpersongames.itch.io/owgtowg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "itch-io"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
    </div>
    <h3 id="Gratuitous" className="text-center title-dots">
      The Gratuitous DLC
    </h3>
    <Video
      videoSrcURL="https://www.youtube.com/embed/yGu4HYyigEg"
      videoTitle="Open World Game: the Open World Game – The Gratutious DLC"
      classes="video"
    />
    <p>
      The Gratuitous DLC expands on the Open World Game: the Open World Game
      experience by adding combat, dungeons, and excessively intense boss
      battles.
    </p>
    <div className="center-buttons">
      <a
        className="corners btn"
        href="https://store.steampowered.com/app/1144110/Open_World_Game_the_Open_World_Game/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "steam"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
    </div>
    <div className="line" />
    <h2
      id="Metamorphic"
      className="text-center no-dots"
      style={{ marginBottom: "10px" }}
    >
      Metamorphic
    </h2>
    <h4 className="text-center title-dots wide-title">
      Word of Mouth Indie Games
    </h4>
    <Video
      videoSrcURL="https://player.vimeo.com/video/324754152"
      videoTitle="Metamorphic trailer"
      classes="video vimeo"
      styles={{ marginBottom: "-17px" }}
    />
    <h5 className="no-dots" style={{ paddingLeft: "0", marginBottom: "10px" }}>
      <ul
        className="horizontal-list one-line-list"
        style={{ marginBottom: "0" }}
      >
        <li>Unity</li>
        <li>Wwise</li>
        <li>Sound Design</li>
        <li>Music</li>
        <li>Audio Implementation</li>
        <li>Design</li>
      </ul>
    </h5>
    <p>
      A puzzle-platformer full of atmosphere, magic sparks, and charming
      geological features. Metamorphic elaborates on the idea of an
      insurpassible barrier being the entire goal of a game rather than a
      stepping stone.
    </p>
    <p>
      I worked on the initial design process and the sound and music during
      development.
    </p>
    <div className="center-buttons">
      <a
        className="corners btn"
        href="https://wordofmouthgames.itch.io/metamorphic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "itch-io"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
    </div>
    <div className="line" />
    <h2
      id="NonPlayer"
      className="text-center no-dots"
      style={{ marginTop: "20px", marginBottom: "10px" }}
    >
      Non-Player Crafter
    </h2>
    <h4 className="text-center title-dots wide-title">Leaf Team</h4>
    <div className="image-container">
      <Img fluid={props.data.title.childImageSharp.fluid} />
      <span className="top-dots" />
    </div>
    <div className="col-3" style={{ marginBottom: "10px" }}>
      <div className="image-container">
        <Img fluid={props.data.gem.childImageSharp.fluid} />
        <span className="top-dots" />
      </div>
      <div className="image-container">
        <Img fluid={props.data.sword.childImageSharp.fluid} />
        <span className="top-dots" />
      </div>
      <div className="image-container">
        <Img fluid={props.data.shop.childImageSharp.fluid} />
        <span className="top-dots" />
      </div>
    </div>
    <h5 className="no-dots" style={{ paddingLeft: "0", marginBottom: "10px" }}>
      <ul
        className="horizontal-list one-line-list"
        style={{ marginBottom: "0" }}
      >
        <li>Unity</li>
        <li>FMOD</li>
        <li>Audio Implementation</li>
      </ul>
    </h5>
    <p>
      A collection of fast-paced minigames about repairing the many
      adeventurer's broken equipment. The only thing worse than having weapon
      durability is being the person that has to fix the weapon durability.
    </p>
    <p>
      I helped design, develop, and implement the audio for Non-Player Crafter
      for Global Game Jam 2020.
    </p>
    <div className="center-buttons">
      <a
        className="corners btn"
        href="https://treecki.itch.io/non-player-crafter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "itch-io"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
    </div>
    <div className="line" />
    <h2
      id="NonPlayer"
      className="text-center no-dots"
      style={{ marginTop: "20px", marginBottom: "10px" }}
    >
      Sneaky Snacks
    </h2>
    <h4 className="text-center title-dots wide-title">Leaf Team</h4>
    <div className="image-container">
      <Img fluid={props.data.sneaky.childImageSharp.fluid} />
      <span className="top-dots" />
    </div>
    <h5 className="no-dots" style={{ paddingLeft: "0", marginBottom: "10px" }}>
      <ul
        className="horizontal-list one-line-list"
        style={{ marginBottom: "0" }}
      >
        <li>Unity</li>
        <li>FMOD</li>
        <li>Design</li>
        <li>Development</li>
        <li>Music</li>
      </ul>
    </h5>
    <p>
      A mischievous little dog's adventure to collect as many treats as
      possible. Be the best good boy you can be by not getting caught, peeing
      outside, and playing with your toy.
    </p>
    <p>
      I helped design, develop, and write the music for Sneaky Snacks for the
      Itchio Major Jam 2.
    </p>
    <div className="center-buttons">
      <a
        className="corners btn"
        href="https://team-leaf.itch.io/sneaky-snacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "itch-io"]} />
        <span className="link-text"></span>
        <span className="top-dots" />
      </a>
    </div>
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
    sneaky: file(relativePath: { eq: "sneaky-snacks.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
