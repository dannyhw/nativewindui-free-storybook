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
    (Story, { parameters, title }) => {
      if (parameters.layout === 'centered') {
        return (
          <View style={{ flex: 1, padding: 16 }}>
            {parameters.showTitle ? (
              <Text
                style={{
                  marginBottom: 16,
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
            {parameters.showTitle ? (
              <Text
                style={{
                  marginBottom: 16,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {title.split('/').at(-1)}
              </Text>
            ) : null}

            <Story />
          </View>
        );
      }

      return <Story />;
    },
  ],
};

export default preview;
