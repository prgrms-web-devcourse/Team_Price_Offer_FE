import Textarea from '../../components/templates/Textarea';

export default {
    title: 'Component/Textarea',
    component: Textarea,
    argTypes: {
        style: {
            defaultValue: {
              width: '324px',
              height: '230px',
            },
            control: { type: 'object' },
          },
          className: { control: { type: 'text' } },
        vaule: { control: { type: 'text' } },
        name: { control: { type: 'text' } },
        placeholder: {
            control: { type: 'text' }
        },
    },
};
export const Default = (args) => {
    return <Textarea {...args}/>;
};
