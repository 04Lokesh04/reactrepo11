// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {details} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {details.map(each => (
        <div>
          <MovieItem moviedetails={each} key={each.id}/>
        </div>
      ))}
    </Slider>
  )
}

export default MoviesSlider
