import { useState } from 'react'
import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import galleryImages from '../galleryImages'

interface GalleryLightBoxProps {
  isOpen: boolean
}

const GalleryLightBox = ({ isOpen }: GalleryLightBoxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToNext = () => {
    currentImageIndex + 1 < galleryImages.length &&
      setCurrentImageIndex((prev) => prev + 1)
  }

  const goToPrevious = () => {
    currentImageIndex > 0 && setCurrentImageIndex((prev) => prev - 1)
  }
  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={goToPrevious}
      onNext={goToNext}
      images={galleryImages}
      currentIndex={currentImageIndex}
      renderNextButton={() => (
        <button style={{ zIndex: '10000' }} onClick={goToNext}>
          next
        </button>
      )}
      renderPrevButton={() => (
        <button style={{ zIndex: '10000' }} onClick={goToPrevious}>
          prev
        </button>
      )}
      renderHeader={() => (
        <div className="lightbox-header">
          <h1>header goes here</h1>
        </div>
      )}
    />
  )
}

export default GalleryLightBox
