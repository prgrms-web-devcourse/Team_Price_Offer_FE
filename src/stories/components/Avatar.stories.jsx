import React from 'react'
import Avatar from '@components/templates/Avatar'

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    style: {
      defaultValue: {
        width: '80px',
        height: '80px',
      },
      control: { type: 'object' },
    },
    className: { control: { type: 'text' } },
    src: {
      type: { name: 'string', require: true },
      control: { type: 'text' },
    },
    alt: {
      type: { name: 'string', require: true },
      control: { type: 'text' },
    },
  },
}
const Template = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/200',
  alt: 'avatar',
}
