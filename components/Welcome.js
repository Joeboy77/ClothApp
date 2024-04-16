import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import inter from '../assets/back1.jpeg'
 export default function() {
    return(
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                    <Image resizeMode="cover" source={inter} style={styles.Background} />
                <View style={styles.textContainer}>    
                    <Text style={styles.text1}>CLOTH APP </Text>
                    <FontAwesome5 name="shopping-cart" size={24} color="blue" style={{marginTop: 25}} />
                </View>
                <Text style={styles.text2}>Get all quality clothes here</Text>
                <View style={styles.Button}>
                    <Button title="Get Started" />
                    <AntDesign name="heart" size={19} color="blue" style={styles.AntDesign}/>
                </View>
            </View>
        </SafeAreaView>
    )
 }
 const styles = StyleSheet.create(
    {
        safe: {
            backgroundColor: 'plum',
            flex: 1,
            
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'plum'
        },
        Background: {
            width: '80%',
            height: 250,
            borderRadius: 20,
            marginTop: -80
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'row',
            
        },
        text1: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 20,
        },
        text2: {
            margin: 10,
            fontSize: 16,
            color: '#fff',
            fontWeight: '500'
        },
        Button: {
            display: 'flex',
            flexDirection: 'row'
        },
        AntDesign: {
            marginTop: 10,
        },
    }
 )