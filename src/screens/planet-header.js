import React from 'react'
import { Touchable, TouchableOpacity, View } from 'react-native'
import { colors, spacing } from '../theme'
import Text from '../components/text'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
    

export default function PlanetHeader({backButton = false}) {
    const navigation = useNavigation();
    return (
        <View style={{borderBottomWidth: 1,borderBottomColor: colors.grey,paddingLeft: spacing[3], paddingVertical: spacing[2], flexDirection:'row'}}>
            {backButton &&
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name="arrow-back-circle-outline" size={28} color="white" style={{marginRight: spacing[1], top: 5}} />
                </TouchableOpacity>
            }
            <Text preset="h2">
                    THE PLANETS
            </Text>
        </View>
    )
}
