import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screen/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../screen/history';
import Locations from '../screen/locations';
import Dashboard from '../screen/dashboard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Bottom} />
        </Stack.Navigator>
    );
};

export default RootNavigator;

export const Bottom = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}

            tabBarOptions={{
                showLabel: false,

            }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='users' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Location'
                component={Locations}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='map-pin' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='History'
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='history' size={30} color={color} />
                    ),

                    tabBarBadge: true,
                    tabBarBadgeStyle: {
                        backgroundColor: 'red', top: 30,
                        left: 4,
                        fontSize: 8,
                        maxHeight: 7,
                        maxWidth: 7,
                        borderRadius: 15,
                        lineHeight: 9,
                        alignSelf: undefined,
                    },

                }}
            />

            <Tab.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dots-vertical" size={30} color="black" />
    
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
