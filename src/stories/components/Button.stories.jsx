import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../../components/templates/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    style: {
      defaultValue: {
        width: '100px',
        height: '80px',
      },
      control: { type: 'object' },
    },
    className: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: action('클릭 이벤트 발생'),
}
