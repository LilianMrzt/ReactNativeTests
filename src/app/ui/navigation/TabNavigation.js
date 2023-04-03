import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "@app/ui/screens/HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import AlertScreen from "@app/ui/screens/AlertScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}/>

            <Tab.Screen
                name="Alert"
                component={AlertScreen}
                options={{
                    tabBarLabel: 'Alert',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="alert-circle-outline" color={color} size={size} />
                    ),
                }}/>
        </Tab.Navigator>
    );
};

export default TabNavigation;
