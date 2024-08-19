import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    {
      files: '**/*.stories.?(ts|tsx|js|jsx)',
      directory: '../components/nativewindui',
    },
  ],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default main;
