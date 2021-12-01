import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'

let observer = null
const LOAD_IMG_EVENT_TYPE = 'loadImage'

const onIntersection = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE))
    }
  })
}

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  width,
  height,
  alt,
  mode,
  className,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  const imageStyle = {
    width,
    height,
    objectFit: mode, // cover, fill, contain
  }

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImage = () => setLoaded(true)

    const imgElement = imgRef.current
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) {
      return
    }

    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])
  const handleImgError = e => {
    e.target.src =
      'https://user-images.githubusercontent.com/66211721/144287708-9f8adc66-4c14-4a4c-a1b1-dc995daa94d1.png'
  }

  return (
    <img
      className={className}
      onError={handleImgError}
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  )
}

Image.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
}

export default Image
