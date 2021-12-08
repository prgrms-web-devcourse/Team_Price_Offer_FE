import Selectbox from '../../components/templates/Selectbox'

export default {
  title: 'Component/Selectbox',
  component: Selectbox,
  argTypes: {
    style: {
      defaultValue: {
        width: '100px',
        height: '50px',
      },
      control: { type: 'object' },
    },
    formName: {
      control: 'text',
    },
    defaultOption: {
      control: 'array',
    },
    options: {
      control: 'array',
    },
  },
}

const Template = args => <Selectbox {...args} />

export const PrimaryDropdown = Template.bind({})
PrimaryDropdown.args = {
  formName: 'formName',
  defaultOption: {
    code: 'none',
    name: '주소를 선택하세요.',
  },
  options: [
    {
      code: 'user',
      name: '사용자',
    },
    {
      code: 'post',
      name: '게시글',
    },
  ],
}
