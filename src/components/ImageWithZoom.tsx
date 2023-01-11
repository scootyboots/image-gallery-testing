import FullImage from './FullImage'
import ZoomedImage from './ZoomedImage'

interface ImageWithZoomProps {
  alt: string
  loading?: 'auto' | 'eager' | 'lazy'
  src: string
}

const ImageWithZoom = ({ alt, loading, src }: ImageWithZoomProps) => {
  return (
    <div className="ImageWithZoom">
      <FullImage src={src} alt={alt} />
      <ZoomedImage
        src={src}
        yPosition={0}
        xPosition={0}
        backgroundSize={750}
        width={500}
        height={500}
      />
    </div>
  )
}

export default ImageWithZoom
