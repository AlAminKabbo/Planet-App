import React from 'react';
import { View } from 'react-native';
import  Text from '../components/text/text';
import { colors } from '../theme';
export default function Home() {
    return (
        <View style={{backgroundColor:colors.black,flex:1}}>
            <Text>Home  Screen</Text>
        </View>
    )
}
