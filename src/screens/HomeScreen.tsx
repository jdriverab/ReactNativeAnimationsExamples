import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Easing, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';


type ButtonNavigationComponentProps = {
    title: string,
    handleNavigate: (selection: 'RegularAnimationsScreen' | 'CicleAnimationScreen'| 'EventsAnimationScreen') => void,
    page: 'RegularAnimationsScreen' | 'CicleAnimationScreen' | 'EventsAnimationScreen'
    
}

const ButtonNavigationComponent = ({title, handleNavigate, page}: ButtonNavigationComponentProps) => {
    return (
        <TouchableOpacity onPress={()=>handleNavigate(page)} 
            style={{width:100, height:100, backgroundColor:'red', justifyContent:'center', alignItems:'center', borderRadius:50}} 
        >
            <Text style={{color:'white' , textAlign:'center'}}>{title}</Text>
        </TouchableOpacity>
    )
}

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;


const HomeScreen = ({navigation}: Props) => {

    const handleNavigate = (selection: 'RegularAnimationsScreen' | 'CicleAnimationScreen' | 'EventsAnimationScreen') => {

        switch(selection){
          case 'RegularAnimationsScreen':
            navigation.navigate('RegularAnimationsScreen') 
            return
          case 'CicleAnimationScreen':
            navigation.navigate('CicleAnimationScreen') 
            return
            case 'EventsAnimationScreen':
            navigation.navigate('EventsAnimationScreen') 
            return
        }
    }

    
  return (
    <View style={[{flex:1, justifyContent:'space-evenly', alignItems:'center'}]}>
        <ButtonNavigationComponent handleNavigate={handleNavigate} title={'Regular animation'} page={'RegularAnimationsScreen'}/>
        <ButtonNavigationComponent handleNavigate={handleNavigate} title={'Cicle animation'} page={'CicleAnimationScreen'}/>
        <ButtonNavigationComponent handleNavigate={handleNavigate} title={'Event animation'} page={'EventsAnimationScreen'}/>

    </View>  
    )
}

export default HomeScreen