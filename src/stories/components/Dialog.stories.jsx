import React, { useRef, useState } from 'react'
import Dialog from '@components/templates/Dialog'

export default {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {
    style: {
      control: { type: 'object' },
    },
    className: { control: { type: 'text' } },
    items: {
      defaultValue: [
        {
          code: 'profile',
          name: '내 프로필',
        },
        {
          code: 'message',
          name: '내 쪽지함',
        },
        {
          code: 'logout',
          name: '로그아웃',
        },
      ],
      control: { type: 'array' },
    },
  },
}

export const Default = () => {
  const [visible, setVisible] = useState(false)
  const buttonRef = useRef(null)

  const handleClick = e => {
    e.stopPropagation()
    setVisible(true)
  }

  const items = [
    {
      code: 'profile',
      name: '내 프로필',
    },
    {
      code: 'message',
      name: '내 쪽지함',
    },
    {
      code: 'logout',
      name: '로그아웃',
    },
  ]

  return (
    <>
      <button ref={buttonRef} onClick={handleClick}>
        Show
      </button>
      <Dialog
        items={items}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
