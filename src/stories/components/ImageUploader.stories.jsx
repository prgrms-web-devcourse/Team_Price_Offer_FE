import React from 'react'
import ImageUploader from '@components/templates/ImageUploader'

export default {
  title: 'Component/ImageUploader',
  component: ImageUploader,
  argTypes: {},
}

const Template = args => <ImageUploader {...args} />

export const Default = Template.bind({})
Default.args = {}
