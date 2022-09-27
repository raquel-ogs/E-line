import { StyleSheet, Text, View } from 'react-native';
import Routes from './StackRoutes'
import Sobre from '../paginas/sobre/'
import Alunos from '../paginas/alunos/'
import Cadastrar from '../paginas/Cadastrar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
       <Tab.Navigator 
       initialRouteName='Home'
       screenOptions={{headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#720CF7",
        tabBarInactiveTintColor:'#',
        tabBarStyle:{
          backgroundColor:"white"
        }

      }}

       >

          <Tab.Screen name = "Home" component={Routes} 
          options = 
          {{tabBarIcon: ({color,size}) => {
            return <Octicons name="home" size={size} color={color}/>
          }}}/>

          <Tab.Screen name ="Cadastrar" component ={Cadastrar}
           options = 
           {{tabBarIcon: ({color,size}) => {

            return <Ionicons name="person-add-outline" size={size} color={color} />


           } 
          }}
          />

          <Tab.Screen name ="Alunos" component ={Alunos}
           options = 
           {{tabBarIcon: ({color,size}) => {
            
            return   <MaterialCommunityIcons name="bell-outline" size={size} color={color} />

           } }}
          />
          <Tab.Screen name = "Sobre" component={Sobre} options = {{
            tabBarIcon:({color,size}) => {
              return   <Ionicons name="person-outline" size={size} color={color} />
            }
          }}
          />



        </Tab.Navigator>   



   
  );
}


