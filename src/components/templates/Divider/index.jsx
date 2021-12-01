import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Divider = ({
  style,
  type = 'horizontal',
  className,
  marginSize = 10,
}) => {
  const dividerStyle = {
    ...style,
    margin: type === 'vertical' ? `0 ${marginSize}px` : `${marginSize}px 0`,
  }

  return <Line style={dividerStyle} className={`${type} ${className}`} />
}

Divider.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string,
  className: PropTypes.string,
  marginSize: PropTypes.number,
}

export default Divider

const Line = styled.hr`
  border: none;
  background-color: #ebebeb;

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    width: 350px;
    display: block;
    height: 1px;
  }
`
