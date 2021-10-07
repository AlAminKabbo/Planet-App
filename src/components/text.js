import  React from 'react'
import [View, Text as RNText] from 'react-native'

const Text = ({chidren, preset = 'default', style}) => {
    return(
        <RNText>
            {chidren}
        </RNText>
    )
}

export default Text