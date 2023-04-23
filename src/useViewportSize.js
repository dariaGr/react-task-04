import { useState } from 'react'
import useWindowEvent from './useWindowEvent'

const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handleResize = () => {
    setViewportSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  useWindowEvent('resize', handleResize)

  return viewportSize
}

export default useViewportSize
