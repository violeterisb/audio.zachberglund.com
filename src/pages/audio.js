import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { Link } from "gatsby"

export default class Audio extends React.Component {
  constructor() {
    super()
    this.state = {
      showItchioEmbed: false,
    }
  }
  startItchioEmbed = () => {
    this.setState({
      showItchioEmbed: true,
    })
  }
  render() {
    let content
    if (!this.state.showItchioEmbed) {
      content = <ClickToPlay onClick={this.startItchioEmbed} />
    } else {
      content = <ItchioEmbed />
    }
    return (
      <Layout>
        <SEO title="Zach Berglund - Game Audio – Sound Design, Music, Audio Implementation, Wwise, FMOD" />
        <h2 className="text-center no-dots">Sound Design Reel</h2>
        <Video
          videoSrcURL="https://www.youtube.com/embed/8mnpxkts4Zc"
          videoTitle="Zach Berglund Sound Design Reel"
          classes="video"
        />
        <p>
          I'm available to create great audio for your game, as well as solve
          your more techinical audio problems in implementation and development.
        </p>
        <h2 className="text-center no-dots">Audio Implementaion</h2>
        <p>
          Here is a little audio demo of the
          <Link to="/games"> game I made</Link> that lets you easily control
          some of the parameters that affected the audio.
        </p>
        <p className="warning">
          This is undergoing maintanace as it does not currently work in Chrome
          or Safari.
        </p>
        {content}
      </Layout>
    )
  }
}
function ClickToPlay(props) {
  return (
    <div id="SoundBoard" className="image-container background-image-button">
      <button className="click-to-play-button" onClick={props.onClick}>
        <div className="corners btn">
          <span className="link-text">
            <p>Click to Play</p>
          </span>
          <span className="top-dots" />
        </div>
      </button>
      <span className="top-dots" />
    </div>
  )
}

function ItchioEmbed(props) {
  return (
    <div id="SoundBoard" className="image-container itchio-embed">
      <iframe
        title="Open World Game: the Open World Game - Sound Board"
        frameBorder="0"
        src="https://itch.io/embed-upload/2411984?color=10161c"
        width="743"
        height="444"
        allow="autoplay;"
        style={{ marginLeft: "-9px" }}
      />
      <span className="top-dots" />
      <div className="block-itchio-fullscreen" />
    </div>
  )
}
