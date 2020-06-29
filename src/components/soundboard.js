import React from "react"
import Unity, { UnityContent } from "react-unity-webgl"

export default class Soundboard extends React.Component {
  constructor(props) {
    super(props)

    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "/OWGTOWG_soundboard/Build/OWGTOWG_soundboard_build.json",
      "/OWGTOWG_soundboard/Build/UnityLoader.js"
    )
  }

  render() {
    // Finally render the Unity component and pass
    // the Unity content through the props.

    return <Unity unityContent={this.unityContent} />
  }
}
