// Write your code here
import './index.css'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {moviedetails} = props
  const {thumbnailUrl, videoUrl} = moviedetails

  return (
    <Popup
      modal
      trigger={
        <img className="thumbnailimage" src={thumbnailUrl} alt="thumbnail" />
      }
    >
      {close => (
        <div className="modalcontainer">
          <button className="closebutton" type="button" onClick={() => close()}>
            <IoMdClose />
          </button>

          <div className="videocontainer">
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
