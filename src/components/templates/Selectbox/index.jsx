import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import styled from '@emotion/styled'

function SelectBox({
  formName,
  options,
  defaultOption,
  style,
  className,
  onChange,
}) {
  const [selectValue, setSelectValue] = useState(defaultOption.code)

  const handleChange = e => {
    setSelectValue(e.target.value)
    onChange && onChange(e)
  }

  return (
    <Select
      name={formName}
      style={style}
      className={className}
      value={selectValue}
      onChange={handleChange}>
      <option
        value={defaultOption.code}
        text={defaultOption.name}
        label={defaultOption.name}
        disabled
      />

      {options.map(({ code, name }) => (
        <option key={code} value={code} text={name} label={name} />
      ))}
    </Select>
  )
}

SelectBox.propTypes = {
  formName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultOption: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onChange: PropTypes.func,
}

const Select = styled.select`
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  color: gray;
`

export default SelectBox
