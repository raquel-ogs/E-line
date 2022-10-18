import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './StackRoutes'
import Novidades from '../pages/notifications/'
import Alunos from '../pages/students/'
import Cadastrar from '../pages/students_signup'
import Conta from '../pages/account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Trap-Light': require('./../fonts/Trap-Light.otf'),
    'Trap-Regular': require('./../fonts/Trap-Regular.otf'),
    'Trap-Medium': require('./../fonts/Trap-Medium.otf'),
    'Trap-SemiBold': require('./../fonts/Trap-SemiBold.otf'),
    'Trap-Bold': require('./../fonts/Trap-Bold.otf'),
    'Trap-Black': require('./../fonts/Trap-ExtraBold.otf'),


  });

  return (
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerShown:false,
          tabBarShowLabel:true,
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle:{
            fontFamily: 'Trap-Medium',
            fontSize: '1.6vh',

          },
          tabBarActiveTintColor:"#720CF7",
          tabBarInactiveTintColor:'#707070',
          tabBarStyle:{
            backgroundColor:"white",
            height: '9vh',
            }
          }}
       >
          <Tab.Screen name = "Home" component={Routes} 
          options = 
          {{tabBarIcon: ({color,size}) => {
            return <Octicons name="home" size={'3.2vh'} color={color}/>
          }}}/>

          <Tab.Screen name = "Novidades" component={Novidades} options = {{
            tabBarIcon:({color,size}) => {
              return   <MaterialCommunityIcons name="bell-outline" size={'3.2vh'} color={color} />
            }
          }}
          />
          <Tab.Screen name ="Alunos" component ={Alunos}
            options = 
            {{tabBarIcon: ({color,size}) => {
              return <MaterialIcons name="person-outline" size={'3.5vh'} color={color} />
            } }}
          />
          <Tab.Screen name ="Conta" component ={Conta}
            options = 
            {{tabBarIcon: ({color,size}) => {
            return <Ionicons name="ios-settings-outline" size={'3.2vh'} color={color} />
            } 
          }}
          />
      </Tab.Navigator>   



   
  );
}


