import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@emotion/styled'

function SelectBox({ style, options, defaultText, className, onChange }) {
  return (
    <Select className={className} style={style} onChange={onChange}>
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
  style: PropTypes.objectOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultText: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

const Select = styled.select`
  width: 407px;
  height: 66px;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  color: gray;
`

export default SelectBox
