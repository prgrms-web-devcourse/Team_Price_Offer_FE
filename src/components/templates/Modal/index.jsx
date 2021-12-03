import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import useClickAway from '@hooks/useClickAway'
import ReactDOM from 'react-dom'

const Modal = ({
  style,
  children,
  className,
  width,
  height,
  visible = false,
  onClose,
}) => {
  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  )

  const ref = useClickAway(e => {
    onClose && onClose()
  })

  const topElement = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.append(topElement)

    return () => {
      document.body.removeChild(topElement)
    }
  })

  return ReactDOM.createPortal(
    <BackgroundDIM style={{ display: visible ? 'flex' : 'none' }}>
      <ModalContainer
        ref={ref}
        style={{ ...style, ...containerStyle }}
        className={className}>
        {children}
      </ModalContainer>
    </BackgroundDIM>,
    topElement,
  )
}

Modal.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

const BackgroundDIM = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 404px;
  height: 500px;
  border-radius: 10px;
  padding: 60px 40px 50px 40px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export default Modal
