import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
    component: Main,
    title: 'Main',
    //alterando props default do elemento
    args: {
        title: 'title default',
        description: 'description default'
    }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

///alterando props de um story espescífico
Basic.args = {
    title: 'Title basic',
    description: 'description basic'
}

export const Secondary: Story = (args) => <Main {...args} />
