import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Radio = ({
  formName,
  style,
  className,
  onChange,
  items,
  radioDirection = 'horizontal',
  InputClassName,
}) => {
  const handleRadiobutton = e => {
    onChange && onChange(e)
  }

  const radioList = items?.map(({ code, name }) => (
    <InputContainer
      key={code}
      style={style}
      className={`${radioDirection} ${className}`}>
      <Input
        type="radio"
        id={(code, name)}
        className={InputClassName}
        name={formName}
        value={code}
        onChange={e => handleRadiobutton(e)}
      />
      <Label htmlFor={(code, name)}>{name}</Label>
    </InputContainer>
  ))

  return (
    <form style={{ display: radioDirection === 'vertical' ? 'block' : 'flex' }}>
      {radioList}
    </form>
  )
}

const Input = styled.input`
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
  cursor: pointer;
`

Radio.propTypes = {
  formName: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  radioDirection: PropTypes.string,
}

export default Radio
