import React, { createContext, useCallback, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Spinner from '@components/templates/Spinner'
import LoadingReducer from './reducer'
import useActions from './actions'

export const LoadingContext = createContext()

const initalState = {
  isLoading: false,
}

const LoadingProvider = ({ children }) => {
  const [{ isLoading }, dispatch] = useReducer(LoadingReducer, initalState)
  const { handleLoadingOn, handleLoadingOff } = useActions(dispatch)

  return (
    <LoadingContext.Provider
      value={{
        handleLoadingOn,
        handleLoadingOff,
      }}>
      <>
        {isLoading && (
          <SpinnerContainer>
            <Spinner loading={isLoading} size={70} />
          </SpinnerContainer>
        )}
        {children}
      </>
    </LoadingContext.Provider>
  )
}

LoadingProvider.propTypes = {}

const SpinnerContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`

export default LoadingProvider
