import React from 'react'
import { View } from 'react-native'
import  Text from '../components/text'
import { colors } from '../theme';
export default function DetailsScreen() {
    return (
        <View style={{backgroundColor:colors.black,flex:1}}>
            <Text>Details  Screen</Text>
        </View>
    )
}
