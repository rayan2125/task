
import React from 'react'
import RootNavigator from './navigator/rootNavigator'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>

        <RootNavigator/>
    </NavigationContainer>
  )
}

export default App

