import galleryImages from '../galleryImages'

interface FullImageProps {
  src: string
  alt: string
}

const FullImage = ({ src, alt }: FullImageProps) => {
  return (
    <div className="w-[550px]">
      <img src={src} alt={alt} />
    </div>
  )
}

export default FullImage
