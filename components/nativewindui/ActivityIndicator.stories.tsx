import { Meta, StoryObj } from '@storybook/react';
import { Appearance } from 'react-native';

import { ActivityIndicator } from './ActivityIndicator';

import { COLORS } from '~/theme/colors';

const meta = {
  component: ActivityIndicator,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
  parameters: {
    layout: 'centered',
    showTitle: true,
  },
} satisfies Meta<typeof ActivityIndicator>;

export default meta;

type Story = StoryObj<typeof ActivityIndicator>;

export const Default: Story = {
  args: {
    size: 'large',
    color: COLORS[Appearance.getColorScheme() ?? 'light'].primary,
  },
};
