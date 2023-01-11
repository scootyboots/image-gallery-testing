import galleryImages from '../galleryImages'

interface ZoomedImageProps {
  src: string
  yPosition: number
  xPosition: number
  backgroundSize: number
  width: number
  height: number
}

const ZoomedImage = ({
  src,
  yPosition,
  xPosition,
  backgroundSize,
  width,
  height,
}: ZoomedImageProps) => {
  return (
    <div
      className={`ZoomedImage bg-red-600 w-[${width}px] h-[${height}px]`}
      style={{
        backgroundImage: `url("${src}")`,
        backgroundPosition: `-${xPosition}px -${yPosition}px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${backgroundSize}`,
      }}
    ></div>
  )
}

export default ZoomedImage
