// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionmovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedymovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="maincontainer">
      <img
        className="primeimage"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="heading">Action Movies</h1>

      <MoviesSlider details={actionmovies} />

      <h1 className="heading">Comedy Movies</h1>

      <MoviesSlider details={comedymovies} />
    </div>
  )
}

export default PrimeVideo
