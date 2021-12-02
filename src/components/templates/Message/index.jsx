import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { ustState,useEffect } from 'react'

const Message = ({ style, className, children }) => {
    // const onChange = e => {
    //     console.log(e.target.value)
    // }
    const checkMessageLength = () => {
        // const [messageHeight , setHeight] = useState(40)
        const messageLength = children.length
        const messageHeight = (messageLength / 12) * 40
        style.height = `${40 + messageHeight}px`
    }
    useEffect(() => {
        checkMessageLength()
    })
    return (
        <MessageBox style={style} className={className}>
            {children}
        </MessageBox>
    )
    
}



Message.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    children: PropTypes.string,
}



const MessageBox = styled.div`
    width: 180px;
    height: 100%;
    color:#000000;
    font-size:14px;
    background-color:#EEEEEE;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:19px;
    padding-right:19px;
    border:none;
    border-radius:30;

    
`


export default MessageBox
