import Message from '../../components/templates/Message';

export default {
    title: 'Component/Message',
    component: Message,
    argTypes: {
        style: {
            defaultValue: {
                width: '180px',
                height: '100%',
                color:'#000000',
                fontSize:'14px',
                backgroundColor:'#EEEEEE',
                paddingLeft:'19px',
                paddingRight:'19px',
                border:'none',
                borderRadius:'30',
            },
            control: { type: 'object' },
        },

        className: {
            control:'text'
        },
        
        children: {
            control:'text'
        }
    },
};
export const Default = (args) => {
    return <Message {...args} />;
};
