import React from 'react'
import { View } from 'react-native'
import { colors, spacing } from '../theme'
import Text from '../components/text'

export default function PlanetHeader() {
    return (
        <View style={{paddingLeft: spacing[6], paddingVertical: spacing[4]}}>
            <Text preset="h2">
                    THE PLANETS
            </Text>
        </View>
    )
}
