import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import type { Preview } from '@storybook/react';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, { parameters, title }) => {
      if (parameters.layout === 'centered') {
        return (
          <View style={{ flex: 1 }}>
            {parameters.showTitle ? (
              <Text
                style={{
                  marginVertical: 16,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {title.split('/').at(-1)}
              </Text>
            ) : null}

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Story />
            </View>
          </View>
        );
      }

      if (parameters.layout === 'padding') {
        return (
          <View style={{ padding: 16 }}>
            <Story />
          </View>
        );
      }

      return <Story />;
    },
    (Story) => {
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <ActionSheetProvider>
              <Story />
            </ActionSheetProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      );
    },
  ],
};

export default preview;
