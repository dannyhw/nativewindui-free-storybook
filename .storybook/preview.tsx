import type { Preview } from '@storybook/react';
import { Text, View } from 'react-native';

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
    (Story, { parameters, name, title }) => {
      if (parameters.layout === 'centered') {
        return (
          <View style={{ flex: 1 }}>
            <Text
              style={{ marginVertical: 16, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
              {title.split('/').at(-1)}
            </Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  ],
};

export default preview;
