import { Meta, StoryObj } from '@storybook/react';

import { ProgressIndicator } from './ProgressIndicator';

const meta = {
  component: ProgressIndicator,
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
      step: 1,
      min: 0,
      max: 100,
      range: true,
    },
  },
  parameters: {
    layout: 'centered',
    showTitle: true,
  },
} as Meta<typeof ProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};
