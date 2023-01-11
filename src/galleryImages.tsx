import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import faster from './assets/images/faster-1200.jpg'
import descendingAgain from './assets/images/descending-again-1200.jpg'
import shift from './assets/images/shift-1200.jpg'

const galleryImages: ImagesListType = [
  {
    src: faster,
    loading: 'lazy',
    alt: 'faster',
  },
  {
    src: descendingAgain,
    loading: 'lazy',
    alt: 'descending again',
  },
  {
    src: shift,
    loading: 'lazy',
    alt: 'shift',
  },
]

export default galleryImages
