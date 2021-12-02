import React from 'react'
import { action } from '@storybook/addon-actions'
import IconButton from '../../components/templates/IconButton'

export default {
  title: 'Component/IconButton',
  component: IconButton,
  argTypes: {
    style: {
      defaultValue: {
        width: '30px',
        height: '30px',
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

const Template = args => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '/favicon.ico',
  alt: 'favicon',
  onClick: action('클릭 이벤트 발생!'),
}
