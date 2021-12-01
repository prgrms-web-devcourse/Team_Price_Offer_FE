import React from 'react'
import Button from '../components/templates/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    borderRadius: {
      control: 'number',
    },
    width: {
      control: { type: 'range', min: 50, max: 400 },
    },
    height: {
      control: { type: 'range', min: 50, max: 400 },
    },
    fontSize: {
      control: 'number',
    },
  },
}
export const Default = args => {
  return <Button {...args}>Button</Button>
}
