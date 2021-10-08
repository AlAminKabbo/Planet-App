import React from 'react'
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native'
import  Text from '../components/text'
import { colors, spacing } from '../theme';
import PlanetHeader from './planet-header';
import { FontAwesome } from '@expo/vector-icons';

const PlanetSection = ({title, value}) => {
    return(
        <View style={styles.planetSection}>
            <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
            <Text preset="h2">{value}</Text>
        </View>
    )
}

export default function Details({route}) {
    const {planet} = route.params;
    const {surfaceImage, name, description, wikiLink, rotationTime, revolutionTime, radius, avgTemp} = planet
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
                        <Text style={{textDecorationLine: 'underline'}}>Wikipedia </Text>
                        </TouchableOpacity>
                        <FontAwesome name="external-link-square" size={17} color="white" />
                    </View>
                </View>
                <PlanetSection title= {"Rotation Time"} value={rotationTime}/>
                <PlanetSection title= {"Revolution Time"} value={revolutionTime}/>
                <PlanetSection title= {"Radius"} value={radius}/>
                <PlanetSection title= {"Average Temp."} value={avgTemp}/>
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
        marginTop: spacing[2],
        textAlign: 'center',
        textTransform: "uppercase",
    },
    descriptionText:{
        marginTop: spacing[2],
        textAlign: 'center',
        paddingHorizontal: spacing[0],
        lineHeight: 22,
    },
    planetSection:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: spacing[3], 
        paddingVertical: spacing[1], 
        borderWidth:1, 
        borderColor: colors.grey,
        marginBottom:6,
        margin: 10,
    }
  });