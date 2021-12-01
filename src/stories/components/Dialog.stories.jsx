import React from 'react'
import Dialog from '@components/templates/Dialog'

export default {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {},
}
const Template = args => <Dialog {...args} />
export const Default = Template.bind({})
Default.args = {}
