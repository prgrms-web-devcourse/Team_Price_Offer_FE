import React, { createContext, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Spinner from '@components/templates/Spinner'
import AsyncReducer from './reducer'
import { LOADING_ON, LOADING_OFF } from './type'

export const AsyncContext = createContext()

const initalState = {
  isLoading: true,
}

const AsyncProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AsyncReducer, initalState)

  const handleLoadingOn = useCallback(async () => {
    dispatch({ type: LOADING_ON })
  }, [])

  const handleLoadingOff = useCallback(async () => {
    dispatch({ type: LOADING_OFF })
  }, [])

  return (
    <AsyncContext.Provider value={{ handleLoadingOn, handleLoadingOff }}>
      <>
        {state.isLoading && (
          <SpinnerContainer>
            <Spinner loading={state.isLoading} size={70} />
          </SpinnerContainer>
        )}
        {children}
      </>
    </AsyncContext.Provider>
  )
}

AsyncProvider.propTypes = {}

const SpinnerContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

export default AsyncProvider
