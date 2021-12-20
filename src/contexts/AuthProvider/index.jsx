import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import Spinner from '@components/templates/Spinner'
import styled from '@emotion/styled'
import initialState from './initalstate'
import AuthReducer from './reducer'
import useActions from './actions'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleModifyUserInfo,
    handleLoadingOn,
    handleLoadingOff,
  } = useActions(dispatch)

  return (
    <AuthContext.Provider
      value={{
        state,
        handleEmailLogin,
        handleKakaoLogin,
        handleSignup,
        handleWithDrawal,
        handleLogout,
        handleGetUserInfo,
        handleModifyUserInfo,
        handleLoadingOn,
        handleLoadingOff,
      }}>
      <>
        {state.isLoading && (
          <SpinnerContainer>
            <Spinner loading={state.isLoading} size={70} />
          </SpinnerContainer>
        )}
        {children}
      </>
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

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

export default AuthProvider
