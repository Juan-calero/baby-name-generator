import type { StoryObj, Meta } from '@storybook/react';

import { Button } from './index';

export default {
	title: 'Buttons/Button',
	component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
	args: { children: 'Test Button', disabled: false },
};
