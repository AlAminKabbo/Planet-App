import React from 'react'
import { View } from 'react-native'
import { colors, spacing } from '../theme'
import Text from '../components/text'

export default function PlanetHeader() {
    return (
        <View style={{borderBottomWidth: 1,borderBottomColor: colors.grey,paddingLeft: spacing[3], paddingVertical: spacing[2]}}>
            <Text preset="h2">
                    THE PLANETS
            </Text>
        </View>
    )
}
