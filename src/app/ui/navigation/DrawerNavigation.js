import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@app/ui/screens/HomeScreen';
import AlertScreen from "@app/ui/screens/AlertScreen";
import ButtonsScreen from "@app/ui/screens/ButtonsScreen";
import CustomDrawer from "@app/ui/components/CustomDrawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icons from "@app/assets/Icons";

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName={'Home'}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name={Icons.home} color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fcfcff',
                        elevation: 0,
                    },
                }}/>

            <Drawer.Screen
                name="Alert"
                component={AlertScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name={Icons.warning} color={color} size={size} />
                    ),
                }}/>

            <Drawer.Screen
                name="Buttons"
                component={ButtonsScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name={Icons.radioButtonOn} color={color} size={size} />
                    ),
                }}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
