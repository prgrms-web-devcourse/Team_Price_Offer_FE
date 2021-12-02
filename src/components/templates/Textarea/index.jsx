import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const textArea = ({style, className, onChange, value, name , placeholder})=> {
    return (
        <TextArea placeholder={placeholder} style={style} className={className} onChange={onChange} name={name} >
        </TextArea>
    )
}

textArea.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    onChange: PropTypes.func,
}


const TextArea = styled.textarea`
    width: 324px;
    height: 230px;
    padding:20px;

    &::placeholder {
        font-size:14px;
        color: #888888
    }
`
export default textArea
