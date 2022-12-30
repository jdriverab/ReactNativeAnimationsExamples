import React, {useState} from 'react'
import { Animated, View, Text, ScrollView } from 'react-native';
import { GlobalStyle } from './RegularAnimationsScreen';


    const ComponentEventColor = () => {

        //const [animationColor, setAnimationColor] = useState(new Animated.Value(0))

        const animationColors = new Animated.Value(0)
    
        const eventInterpolated = animationColors.interpolate({
            inputRange: [0, 2000],
            outputRange: ["yellow", "purple"],
        });
    
        const animatedStyle = {
            backgroundColor: eventInterpolated 
        }

        return (
                <ScrollView
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={true}

                onScroll={ 
                    Animated.event([
                        { nativeEvent: {
                            contentOffset: {
                            x: animationColors
                            }
                        }}
                        ],
                        {useNativeDriver: false}
                    )
                }>

                    <Animated.View style={[{height:1500}, animatedStyle]}/>
                        

                </ScrollView>

        )
    }
    
    const EventsAnimationScreen = () => {
      return (
        <View style={{ flex: 1}}>
            <ComponentEventColor/>
    
        </View>
      )
    }

export default EventsAnimationScreen