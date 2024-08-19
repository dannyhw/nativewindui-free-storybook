import { Meta, StoryObj } from '@storybook/react';
import { Platform, View, Button } from 'react-native';

import { Sheet, useSheetRef } from './Sheet';
import { Text } from './Text';

import { useColorScheme } from '~/lib/useColorScheme';

const meta = {
  component: Sheet,
  parameters: {
    layout: 'centered',
    showTitle: true,
  },
} as Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: function BottomSheetExample(args) {
    const { colorScheme } = useColorScheme();
    const bottomSheetModalRef = useSheetRef();

    return (
      <View className="items-center">
        <Button
          color={colorScheme === 'dark' && Platform.OS === 'ios' ? 'white' : 'black'}
          title="Open Bottom Sheet"
          onPress={() => bottomSheetModalRef.current?.present()}
        />

        <Sheet ref={bottomSheetModalRef} {...args}>
          <View className="flex-1 items-center justify-center pb-8">
            <Text>@gorhom/bottom-sheet 🎉</Text>
          </View>
        </Sheet>
      </View>
    );
  },
  args: {
    snapPoints: [200],
  },
};
