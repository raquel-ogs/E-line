import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Trap-Black': require('./src/fonts/Trap-Black.otf'),
    'Trap-Bold': require('./src/fonts/Trap-Bold.otf'),
    'Trap-ExtraBold': require('./src/fonts/Trap-ExtraBold.otf'),
    'Trap-Light': require('./src/fonts/Trap-Light.otf'),
    'Trap-Medium': require('./src/fonts/Trap-Medium.otf'),
    'Trap-Regular': require('./src/fonts/Trap-Regular.otf'),
    'Trap-SemiBold': require('./src/fonts/Trap-SemiBold.otf'),

  });


  return (
      <NavigationContainer>

       <Routes/>
      
      </NavigationContainer>


   
  );
}


