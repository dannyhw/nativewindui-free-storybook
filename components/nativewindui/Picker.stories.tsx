import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Picker, PickerItem } from './Picker';

import { useColorScheme } from '~/lib/useColorScheme';

const meta = {
  component: Picker,
  parameters: {
    layout: 'padding',
    showTitle: true,
  },
} as Meta<typeof Picker>;

export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  render: function PickerExample() {
    const { colors } = useColorScheme();

    const [picker, setPicker] = useState('blue');

    return (
      <Picker selectedValue={picker} onValueChange={(itemValue) => setPicker(itemValue)}>
        <PickerItem
          label="Red"
          value="red"
          color={colors.foreground}
          style={{
            backgroundColor: colors.root,
          }}
        />
        <PickerItem
          label="Blue"
          value="blue"
          color={colors.foreground}
          style={{
            backgroundColor: colors.root,
          }}
        />
        <PickerItem
          label="Green"
          value="green"
          color={colors.foreground}
          style={{
            backgroundColor: colors.root,
          }}
        />
      </Picker>
    );
  },
};
