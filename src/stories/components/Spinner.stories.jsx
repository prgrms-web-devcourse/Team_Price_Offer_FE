import React, { useState } from 'react'
import Spinner from '@components/templates/Spinner'
import styled from '@emotion/styled'

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {},
}

export const Default = () => {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(!loading)
  }

  return (
    <>
      <button onClick={handleLoading}>Toggle</button>
      <SpinnerContainer>
        <Spinner color="#F74F2A" loading={loading} size={100} />
      </SpinnerContainer>
    </>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
