import { RefCallback, RefObject, useEffect, useRef } from 'react'
import faster from '../assets/images/faster-1200.jpg'
import './CanvasImage.css'

// interface CanvasImageProps {
//   imageRef: RefObject
// }

const CanvasImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const image = faster

  const draw = (
    ctx: CanvasRenderingContext2D,
    imgElement: HTMLOrSVGImageElement
  ) => {
    ctx.drawImage(imgElement, 0, 0)
  }

  useEffect(() => {
    if (canvasRef.current !== null) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (context !== null) {
        const imageEl: HTMLOrSVGImageElement | null =
          document.querySelector('.primaryImage')
        if (imageEl) {
          draw(context, imageEl)
        }
      }
    }
  }, [])

  return (
    <div className="canvas-container">
      <canvas width="750px" height="1200px" ref={canvasRef}></canvas>
    </div>
  )
}

export default CanvasImage
