import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Audio = () => (
  <Layout>
    <SEO title="Zach Berglund - Audio" />
    <h2 className="text-center no-dots" >Sound Design Reel</h2>
    <Video
        videoSrcURL="https://www.youtube.com/embed/NHet48LVJMk"
        videoTitle="Open World Game: the Open World Game trailer"
        classes="video"
    />
    <p>As well as the work shown in my reel I have a background in Music Composition with a 
      Bachelor of Arts from University of Northern California.</p>
    <p>I am most interested in technical sound design and implementation.</p>
  </Layout>
)

export default Audio
