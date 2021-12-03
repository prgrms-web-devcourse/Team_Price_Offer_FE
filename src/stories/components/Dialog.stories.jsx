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
          name: 'profile',
          text: '내 프로필',
        },
        {
          name: 'message',
          text: '내 쪽지함',
        },
        {
          name: 'logout',
          text: '로그아웃',
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
      name: 'profile',
      text: '내 프로필',
    },
    {
      name: 'message',
      text: '내 쪽지함',
    },
    {
      name: 'logout',
      text: '로그아웃',
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
