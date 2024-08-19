import 'expo-dev-client';
import './global.css';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { default as Storybook } from './.storybook';

export default () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ActionSheetProvider>
      <BottomSheetModalProvider>
        <Storybook />
      </BottomSheetModalProvider>
    </ActionSheetProvider>
  </GestureHandlerRootView>
);
