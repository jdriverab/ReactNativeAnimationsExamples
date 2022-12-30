import React, {useState} from 'react'
import { Animated, View, Text, ScrollView, PanResponder } from 'react-native';
import { GlobalStyle } from './RegularAnimationsScreen';

const ComponentEventPan = () => {
    const animationPan = new Animated.ValueXY({x:0, y:0})

    const animatedStyle = {
        transform: animationPan.getTranslateTransform() 
    }

    const EventComponent = () => {
        let _x = 0
        let _y = 0

        animationPan.addListener((value)=>{
            _x = value.x,
            _y = value.y
        })
        
        return PanResponder.create({
                onStartShouldSetPanResponder:()=> true,
                onMoveShouldSetPanResponder:()=> true,
                onPanResponderGrant: ()=>{
                    animationPan.extractOffset()
                    /*
                    animationPan.setOffset({
                        x: _x,
                        y: _y
                    });
                    animationPan.setValue({
                        x:0,
                        y:0
                    })
                    */
                },

                onPanResponderMove: Animated.event([
                    // null porque no se espera evento, el segundo objeto es por los gestos
                    null, {
                    dx: animationPan.x,
                    dy: animationPan.y
                }],
                {useNativeDriver:false}),

                onPanResponderRelease: (e, {vx, vy})=>{
                    Animated.decay(animationPan,{
                        velocity:{
                            x:vx,
                            y:vy 
                        },
                        deceleration:0.997,
                        useNativeDriver:false
                    }).start()
                },
        })
    }

    return(
        <Animated.View 
        style={[{height:80, width:80, position:'absolute', top:'40%', right:'45%', backgroundColor:'red'}, animatedStyle]}
        {... EventComponent().panHandlers}
        />

    )

}


    const ComponentEventColor = () => {


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
                            y: animationColors
                            }
                        }}
                        ],
                        {useNativeDriver: false}
                    )
                }>

                    <Animated.View style={[{height:2000}, animatedStyle]}/>


                        

                </ScrollView>

        )
    }
    
    const EventsAnimationScreen = () => {
      return (
        <View style={{ flex: 1, /*justifyContent:'center', alignItems:'center'*/}}>
            {<ComponentEventColor/>}
            <ComponentEventPan/>
        </View>
      )
    }

export default EventsAnimationScreen