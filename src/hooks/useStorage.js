const useStorage = () => {
  const isBrowser = typeof window !== 'undefined'

  const getItem = key => {
    if (key === 'userData') {
      return isBrowser ? JSON.parse(window.sessionStorage.getItem(key)) : ''
    }
    return isBrowser ? window.sessionStorage.getItem(key) : ''
  }

  const setItem = (key, value) => {
    if (isBrowser) {
      window.sessionStorage.setItem(key, JSON.stringify(value))
      return true
    }
    return false
  }

  const removeItem = key => {
    if (isBrowser) {
      window.sessionStorage.removeItem(key)
      return true
    }
  }

  const clear = () => {
    if (isBrowser) {
      window.sessionStorage.clear()
      return true
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  }
}

export default useStorage
