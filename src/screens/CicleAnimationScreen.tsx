import React from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { GlobalStyle } from './RegularAnimationsScreen';

const ComponentCicleTranslation = () => {
    const animationTranslation = new Animated.Value(0)

    const animatedStyle = {
        transform: [
          { 
            translateY: animationTranslation
          }
        ]
      }

    Animated.loop(
        Animated.timing(animationTranslation, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true 
        })
        
    
        
        
        ,{
            resetBeforeIteration: false, 
            iterations:20}
        
        
        ).start();


    return (
        <TouchableOpacity>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Translation
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const ComponentCicleRotation = () => {
    const animationColor = new Animated.Value(0)

    const CicleTanslationInterpolated = animationColor.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    });

    const animatedStyle = {
        transform: [
            { 
            rotate: CicleTanslationInterpolated
            }
        ]   
    }

    Animated.loop(Animated.timing(animationColor, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true 
        })).start();


    return (
        <TouchableOpacity>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Spinner
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const CicleAnimationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <ComponentCicleTranslation/>
        <ComponentCicleRotation/>

    </View>
  )
}

export default CicleAnimationScreen