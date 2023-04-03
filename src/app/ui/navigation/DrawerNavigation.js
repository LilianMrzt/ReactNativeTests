import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@app/ui/screens/HomeScreen';
import Icon from "react-native-vector-icons/Ionicons";
import AlertScreen from "@app/ui/screens/AlertScreen";
import ButtonsScreen from "@app/ui/screens/ButtonsScreen";

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (

            <Drawer.Navigator initialRouteName={'Home'}>
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                        headerStyle: {
                            backgroundColor: '#fcfcff',
                            elevation: 0
                        }
                    }}/>

                <Drawer.Screen
                    name="Alert"
                    component={AlertScreen}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <Icon name="alert-circle-outline" color={color} size={size} />
                        ),
                    }}/>

                <Drawer.Screen
                    name="Buttons"
                    component={ButtonsScreen}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <Icon name="radio-button-on" color={color} size={size} />
                        ),
                    }}/>
            </Drawer.Navigator>

    );
}

export default DrawerNavigation;
