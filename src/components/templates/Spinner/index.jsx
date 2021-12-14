import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashLoader } from 'react-spinners'

const Spinner = ({ loading, size = 50, color = '#F74F2A' }) => {
  return <HashLoader color={color} loading={loading} size={size} />
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Spinner
