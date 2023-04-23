import { useEffect } from 'react'

const useWindowEvent = (type, listener, options) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options)
      return () => window.removeEventListener(type, listener, options)
    }
  }, [type, listener])
}

export default useWindowEvent
