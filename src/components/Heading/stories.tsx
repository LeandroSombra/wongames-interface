import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
    component: Heading,
    title: 'Header',
    argTypes: {
        children: {
            type: 'string'
        }
    }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
    children: 'Most populars'
}
