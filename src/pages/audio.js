import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Audio = () => (
  <Layout>
    <SEO title="Zach Berglund - Game Audio – Sound Design, Music, Audio Implementation, Wwise, FMOD" />
    <h2 className="text-center no-dots">Sound Design Reel</h2>
    <Video
      videoSrcURL="https://www.youtube.com/embed/8mnpxkts4Zc"
      videoTitle="Zach Berglund Sound Design Reel"
      classes="video"
    />
    <p>
      I'm available to create great audio for your game, as well as solve your
      more techinical audio problems in implementation and development.
    </p>
  </Layout>
)

export default Audio
