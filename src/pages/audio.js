import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Audio = () => (
  <Layout>
    <SEO title="Zach Berglund - Audio" />
    <h2 className="text-center no-dots" >Sound Design Reel</h2>
    <Video
        videoSrcURL="https://www.youtube.com/embed/8mnpxkts4Zc"
        videoTitle="Zach Berglund Sound Design Reel"
        classes="video"
    />
  </Layout>
)

export default Audio
