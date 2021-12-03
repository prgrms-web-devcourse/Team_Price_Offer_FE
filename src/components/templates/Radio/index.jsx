import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Radio = ({
  style,
  className,
  onChange,
  lists,
  radioDirection = 'horizontal',
  size = '50',
  fontSize = '20',
}) => {
  const [inputStatus, setInputStatus] = useState(null)

  const handleRadiobutton = radioBtnValue => {
    setInputStatus(radioBtnValue)
    onChange && onChange({ args: inputStatus })
  }

  const radioList =
    lists &&
    lists.map(list => {
      return (
        <InputContainer
          key={list.value}
          style={style}
          className={`${radioDirection} ${className}`}>
          <Input
            style={{ width: size, height: size }}
            type="radio"
            name={list.text}
            value={list.value}
            checked={inputStatus === list.value}
            onChange={() => handleRadiobutton(list.value)}
          />
          <Label htmlFor={list.value} style={{ fontSize }}>
            {list.value}
          </Label>
        </InputContainer>
      )
    })

  return (
    <form style={{ display: radioDirection === 'vertical' ? 'block' : 'flex' }}>
      {radioList}
    </form>
  )
}

const Input = styled.input`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  &.vertical {
    margin-bottom: 20px;
  }

  &.horizontal {
    margin-right: 30px;
  }
`

const Label = styled.label`
  font-size: 20px;
`

Radio.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  lists: PropTypes.arrayOf(PropTypes.object),
  radioDirection: PropTypes.string,
}

export default Radio
