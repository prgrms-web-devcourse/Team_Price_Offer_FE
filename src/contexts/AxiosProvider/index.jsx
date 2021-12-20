import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import AxiosReducer from './reducer'
import useActions from './actions'

export const AxiosContext = createContext()

const initalState = {
  auth: null,
  instance: null,
}

const AxiosProvider = ({ children }) => {
  const [{ auth, instance }, dispatch] = useReducer(AxiosReducer, initalState)
  useActions(dispatch)

  return (
    <AxiosContext.Provider value={{ auth, instance }}>
      {children}
    </AxiosContext.Provider>
  )
}

AxiosProvider.propTypes = {}

export default AxiosProvider
