import  React from 'react';
import {View, Text as RNText} from 'react-native';
import {margeAll, flatten} from 'ramda';
import { presets } from './text.preset';
const Text = ({chidren, preset = 'default', style}) => {
    const styles = margeAll(
        flatten([presets[preset] || presets.default, customStyle])
    )
    return(
        <RNText style={styles}>
            {chidren}
        </RNText>
    )
}

export default Text