import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import Home from '../pages/home'
import Detalhes from '../pages/students_details'
import Cadastrar from '../pages/students_signup'
const Stack = createStackNavigator();

export default function StackRoutes(){
return(

        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            

        }}>
            <Stack.Screen name ='Home' component={Home} />
            <Stack.Screen name = 'Detalhes' component={Detalhes}/>
            <Stack.Screen name = 'Cadastrar' component={Cadastrar}/>

        
        </Stack.Navigator>


);

}