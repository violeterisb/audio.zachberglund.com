import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Games = () => (
  <Layout>
    <SEO title="Zach Berglund - Games" />
    <h2 className="text-center no-dots" style={{marginBottom: "10px"}}>Open World Game: the Open World Game</h2>
    <h4 className="text-center title-dots">Morning Person Games</h4>
    <Video
        videoSrcURL="https://www.youtube.com/embed/N3wcgS6hs7Q"
        videoTitle="Open World Game: the Open World Game trailer"
        classes="video"
    />
    <p>A solo project of mine, Open World Game: the Open World Game is a satire capturing 
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
    <h2 className="text-center no-dots" style={{marginBottom: "10px"}}>Metamorphic</h2>
    <h4 className="text-center title-dots wide-title">Word of Mouth Indie Games</h4>
    <Video
      videoSrcURL="https://player.vimeo.com/video/324754152"
      videoTitle="Metamorphic trailer"
      classes="video vimeo"
    />
    <p>A puzzle-platformer full of atmosphere, magic sparks, and charming geological features. 
      I worked on the initial design process and the sound and music during development.</p>
    <div className="center-buttons">
      <a className="corners btn" href="https://wordofmouthgames.itch.io/metamorphic" target="_blank"
       rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'itch-io']} />
          <span className="link-text"></span><span className="top-dots"/>
      </a>          
    </div>
  </Layout>
)
export default Games
