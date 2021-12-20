import React, { useCallback } from 'react'
import { LOADING_ON, LOADING_OFF } from './types'

const useActions = dispatch => {
  const handleLoadingOn = useCallback(async () => {
    dispatch({ type: LOADING_ON })
  }, [])

  const handleLoadingOff = useCallback(async () => {
    dispatch({ type: LOADING_OFF })
  }, [])

  return { handleLoadingOn, handleLoadingOff }
}

export default useActions
