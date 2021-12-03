import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Message = ({ style, className, children }) => {
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
  max-width: 180px;
  height: 100%;
  word-break: break-all;
  color: #000000;
  font-size: 14px;
  background-color: #eeeeee;
  padding: 10px 19px;
  border: none;
  border-radius: 30px;
`

export default MessageBox
