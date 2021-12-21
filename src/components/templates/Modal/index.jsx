import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import useClickAway from '@hooks/useClickAway'
import ReactDOM from 'react-dom'
import { CLOSE } from '@utils/constant'
import IconButton from '../IconButton'

const Modal = ({
  style,
  children,
  className,
  width,
  height,
  visible = false,
  onClose,
}) => {
  if (typeof window !== 'object') {
    return null
  }

  const closeIconStyle = {
    position: 'absolute',
    top: '20px',
    right: '25px',
    width: '15px',
    height: '15px',
  }

  const containerStyle = useMemo(
    () => ({
      position: 'relative',
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
        style={{ ...containerStyle, ...style }}
        className={className}>
        <>
          {onClose && (
            <IconButton
              src={CLOSE}
              alt="close modal"
              style={closeIconStyle}
              onClick={onClose}
            />
          )}
          {children}
        </>
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
  width: 90vw;
  min-width: 350px;
  max-width: 400px;
  height: 500px;
  border-radius: 10px;
  padding: 60px 40px 50px 40px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  button {
    color: #fff;
    background: #f74f2a;
  }
`

export default Modal
