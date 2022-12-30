
import React, { useContext, useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {


  return (

    <NavigationContainer>
      <SafeAreaView style={[{ flex: 1 }]}>
        <StatusBar backgroundColor={'red'}/>
          <StackNavigator/>
      </SafeAreaView>
    </NavigationContainer>


  );
};


export default App;
