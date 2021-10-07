import  React from 'react';
import { Text as RNText} from 'react-native';
import { presets } from './text.preset';

const Text = ({children, preset = 'default', style}) => {
    const testStyle = StyleSheet.compose(presets[preset],style)
    return(
        <RNText style={teststyles}>
            {children}
        </RNText>
    )
}

export default Text