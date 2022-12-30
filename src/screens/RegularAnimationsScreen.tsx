import React from 'react'
import { Animated, TouchableOpacity, Text, StyleSheet, Easing, ScrollView } from 'react-native';

export const GlobalStyle = StyleSheet.create({

    regularContainerTouchable: {
    },

    regularContainerButtonStyle: {
        width: 90,
        height: 70,
        backgroundColor: '#111827',
        borderColor: 'whitesmoke',
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: "solid",

        justifyContent: 'center'
    },

    regularContainerButtonNoColorStyle: {
        width: 90,
        height: 70,
        borderColor: 'whitesmoke',
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: "solid",
        justifyContent: 'center'
    },
})

const ComponentSpring = () => {
    const animationSpring = new Animated.Value(0)

    const animatedStyle = {
        transform: [{ translateX: animationSpring }],

    }

    const activateAnimation = () => {

        Animated.spring(animationSpring, {
            toValue: 100,
            useNativeDriver: true,
            tension: 20,
            friction: 3,
        }).start(() =>
            Animated.spring(animationSpring, {
                toValue: 0,
                useNativeDriver: true,
                tension: 1,
                friction: 3,
            }).start()
        )
        return
    }

    return (
        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Spring
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const ComponentRotation = () => {
    const animationRotation = new Animated.Value(0)

    const rotateInterpolate = animationRotation.interpolate(
        {
            inputRange:[0, 360], 
            outputRange:['0deg','360deg']
        }
    )

    const animatedStyle = {
        //transform:[{rotate: `${animationRotation}deg`}]
        transform:[{rotate: rotateInterpolate}]

    }

    const activateAnimation = () => {
        Animated.timing(animationRotation, {
            toValue: 720,
            duration: 3000,
            useNativeDriver: true,
            easing: Easing.exp
        }).start()

        return
    }

    return (
        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Rotate
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const ComponentColor = () => {
    const animationColor = new Animated.Value(0)

    const rotateInterpolate = animationColor.interpolate(
        {
            inputRange:[0, 1, 2], 
            outputRange:['black','red', 'yellow']
        }
    )

    const animatedStyle = {
        backgroundColor: rotateInterpolate
    }

    const activateAnimation = () => {

        Animated.timing(animationColor, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
            easing: Easing.linear
        }).start(()=>{
                Animated.timing(animationColor, {
                toValue: 2,
                duration: 3000,
                useNativeDriver: false,
                easing: Easing.linear
            }).start(
                ()=>{
                    Animated.timing(animationColor, {
                    toValue: 0,
                    duration: 3000,
                    useNativeDriver: false,
                    easing: Easing.linear
                }).start()}
            )}
        )

        return
    }

    return (
        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonNoColorStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Color
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const ComponentTranslate = () => {
    const animationTranslate = new Animated.Value(0)

    const animatedStyle = {
        transform: [{ translateX: animationTranslate }],

    }

    const activateAnimation = () => {
        Animated.timing(animationTranslate, {
            toValue: 55,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.exp
        }).start(() =>
            Animated.timing(animationTranslate, {
                toValue: -55,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.quad
            }).start(() =>
                Animated.timing(animationTranslate, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.exp
                }).start()
            )
        )
        return
    }

    return (

        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Translate
                </Text>
            </Animated.View>        
        </TouchableOpacity>


    )
}

const ComponentScale = () => {
    const animationScale = new Animated.Value(1)

    const animatedStyle = {
        transform: [
            {
                scale: animationScale
            }
        ]
    }

    const activateAnimation = () => {
        Animated.timing(animationScale, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.cubic
        }).start(() =>
            Animated.timing(animationScale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.cubic
            }).start()
        )
        return
    }

    return (

        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Scale
                </Text>
            </Animated.View>        
        </TouchableOpacity>


    )
}

const ComponentDimensions = () => {
    const animationDimensions = new Animated.Value(80)

    const animatedStyle = {
        width: animationDimensions,
        height: animationDimensions
    }

    const activateAnimation = () => {
        Animated.timing(animationDimensions, {
            toValue: 90,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.circle


        }).start(() =>
            Animated.timing(animationDimensions, {
                toValue: 320,
                duration: 2000,
                useNativeDriver: false,
                easing: Easing.sin

            }).start(() =>
                Animated.timing(animationDimensions, {
                    toValue: 60,
                    duration: 2000,
                    useNativeDriver: false,
                    easing: Easing.bounce

                }).start()
            )
        )
        return
    }

    return (

        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={[GlobalStyle.regularContainerButtonStyle, animatedStyle]}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Dimension
                </Text>
            </Animated.View>        
        </TouchableOpacity>


    )
}

const ComponentPosition = () => {
    const animationTranslate = new Animated.Value(-30)

    const animatedStyle = {
        bottom: animationTranslate,
    }

    const activateAnimation = () => {
        Animated.timing(animationTranslate, {
            toValue: 210,
            duration: 800,
            useNativeDriver: false,
            easing: Easing.bounce

        }).start(() =>
            Animated.timing(animationTranslate, {
                toValue: 100,
                duration: 500,
                useNativeDriver: false,
                easing: Easing.bounce
            }).start(() =>
                Animated.timing(animationTranslate, {
                    toValue: -30,
                    duration: 1000,
                    useNativeDriver: false,
                    easing: Easing.bounce
                }).start()
            )
        )
        return
    }

    return (
        <TouchableOpacity onPress={activateAnimation} style={GlobalStyle.regularContainerTouchable}>
            <Animated.View style={
                [
                    { position: 'absolute', right: -40, },
                    GlobalStyle.regularContainerButtonStyle,
                    animatedStyle,
                ]}
            >
            <Text style={{ color: 'white', textAlign: 'center'}}>
                Position
            </Text>

            </Animated.View>
        </TouchableOpacity>
    )
}



const RegularAnimations = () => {

    const animationOpacity = new Animated.Value(0)

    const animatedStyle = {
        opacity: animationOpacity
    }

    Animated.timing(animationOpacity, {
        toValue: 55,
        duration: 1000,
        useNativeDriver: true
    }).start()

    return (
        <Animated.View style={[{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}, animatedStyle]}>
            

                <ComponentSpring />
                <ComponentRotation/>
                <ComponentColor/>
                <ComponentTranslate />
                <ComponentScale />
                <ComponentDimensions />
                <ComponentPosition />

        </Animated.View>
    )
}

export default RegularAnimations