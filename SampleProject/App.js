import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from './components/ContactScreen';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutScreen}
                />
                <Drawer.Screen
                    name="Contact"
                    component={ContactScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
