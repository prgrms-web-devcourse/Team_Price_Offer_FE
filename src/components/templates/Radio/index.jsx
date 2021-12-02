import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Radio = ({
  style,
  className,
  name,
  onChange,
  lists,
  radioDirection = 'horizontal',
}) => {
  const [inputStatus, setInputStatus] = useState(null)

  const handleRadiobutton = radioBtnValue => {
    setInputStatus(radioBtnValue)
    onChange && onChange({ args: inputStatus })
  }

  const radioList = lists.map(list => {
    return (
      <InputContainer key={list.value} className={radioDirection}>
        <Input
          type="radio"
          name={name}
          style={style}
          value={list.value}
          checked={inputStatus === list.value}
          className={className}
          onChange={() => handleRadiobutton(list.value)}
        />
        <Label htmlFor={list.value}> {list.value}</Label>
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
  width: 30px;
  height: 30px;
  margin-right: 10px;
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
  name: PropTypes.string,
  onChange: PropTypes.func,
  lists: PropTypes.arrayOf(PropTypes.object),
  radioDirection: PropTypes.string,
}

export default Radio
