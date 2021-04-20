import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, {LogoProps} from '.'

export default {
    component: Logo,
    title: 'Logo'
    //alterando props default do element
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
