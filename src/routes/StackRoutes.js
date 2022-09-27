import { createStackNavigator } from "@react-navigation/stack";
import Home from '../pages/home'
import Detalhes from '../pages/students_details'
const Stack = createStackNavigator();

export default function StackRoutes(){
return(

        <Stack.Navigator>
        
            <Stack.Screen name ='Home' component={Home}  />
            <Stack.Screen name = 'Detalhes' component={Detalhes}/>
        
        </Stack.Navigator>


);

}