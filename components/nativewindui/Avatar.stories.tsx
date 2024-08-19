import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { Text } from './Text';

const meta = {
  component: Avatar,
  parameters: {
    layout: 'centered',
    showTitle: true,
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function AvatarExample(args) {
    const TWITTER_AVATAR_URI =
      'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg';

    return (
      <Avatar {...args}>
        <AvatarImage source={{ uri: TWITTER_AVATAR_URI }} />

        <AvatarFallback>
          <Text>NUI</Text>
        </AvatarFallback>
      </Avatar>
    );
  },

  args: {
    alt: 'Avatar',
  },
};
