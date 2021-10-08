import React from 'react'
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native'
import  Text from '../components/text'
import { colors, spacing } from '../theme';
import PlanetHeader from './planet-header';

export default function Details({route}) {
    const {planet} = route.params;
    const {surfaceImage, name, description, wikiLink} = planet
    return (
        <View style={{backgroundColor:colors.black,flex:1}}>
            <PlanetHeader backButton={true}/>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={surfaceImage} style={styles.image} resizeMode="contain"/>
                    <Text preset="h1" style={styles.nameText} >
                        {name}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {description}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Source: </Text>
                        <TouchableOpacity onPress={()=> Linking.openURL(wikiLink)}>
                        <Text style={{textDecorationLine: 'underline'}}>Wikipedia</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      padding: spacing[3],
      alignItems: 'center',
      justifyContent:'center',
    },
    image: {
      alignSelf: 'center',
      height: 250,
    },
    nameText:{
        marginTop: spacing[3],
        textAlign: 'center',
        textTransform: "uppercase",
    },
    descriptionText:{
        marginTop: spacing[3],
        textAlign: 'center',
        paddingHorizontal: spacing[1],
        lineHeight: 22,

    }
  });