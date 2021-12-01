import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@emotion/styled'

function SelectBox({ width = '407px', height = '66px', options, defaultText }) {
  return (
    <Select style={{ width, height }}>
      <option className="defaultoption" value="" selected disabled hidden>
        {defaultText}
      </option>
      {options.map(({ text, value }) => (
        <option key={value} text={text} value={value} label={value} />
      ))}
    </Select>
  )
}

SelectBox.propTypes = {
  defaultText: PropTypes.string,
  width: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Select = styled.select`
  cursor: pointer;
  padding-left: 20px;
  font-size: 16px;
  color: gray;
`

export default SelectBox
