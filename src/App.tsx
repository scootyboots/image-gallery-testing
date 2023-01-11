import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import faster from './assets/images/faster-1200.jpg'
import CanvasImage from './components/CanvasImage'
import GalleryLightbox from './components/GalleryLightbox'
import ZoomedImage from './components/ZoomedImage'
import './App.css'
import FullImage from './components/FullImage'
import galleryImages from './galleryImages'
import ImageWithZoom from './components/ImageWithZoom'

const fasterImage = <img src={faster} className="primaryImage" />

function App() {
  const [count, setCount] = useState(0)

  const [keyboardListenersAdded, setKeyboardListenersAdded] = useState(false)

  const [galleryIsOpen, setGalleryIsOpen] = useState(false)

  const mainImageRef = useRef(null)

  const helloWorld = (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <img src={faster} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

  useEffect(() => {
    if (!keyboardListenersAdded) {
      document.addEventListener('keydown', ({ code }) => {
        console.log(code)
        if (code === 'Escape') setGalleryIsOpen(false)
      })
      setKeyboardListenersAdded(true)
    }
  }, [])

  return (
    <div className="App">
      <ImageWithZoom src={galleryImages[0].src} alt={galleryImages[0].alt} />
      <button onClick={() => setGalleryIsOpen((prev) => !prev)}>
        open gallery lightbox
      </button>
      <GalleryLightbox isOpen={galleryIsOpen} />
      {galleryIsOpen && (
        <div className="lightbox-background absolute top-0 bottom-0 left-0 right-0 bg-slate-900 z-10 opacity-80"></div>
      )}
    </div>
  )
}

export default App
