import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'

const Tab = createBottomTabNavigator()

const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          let iconName

          if (route.name === 'Feed') {
            iconName = 'home'
          } else if (route.name === 'AddPhoto') {
            iconName = 'camera'
          } else if (route.name === 'Profile') {
            iconName = 'user'
          }

          return <Icon name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name='Feed' component={Feed} />
      <Tab.Screen name='AddPhoto' component={AddPhoto} />
      <Tab.Screen name='Profile' component={Feed} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigator
