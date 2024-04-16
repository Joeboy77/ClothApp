import { View, Image, SafeAreaView, StyleSheet, TextInput, Text, FlatList, Platform, ScrollView } from "react-native";
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import  logo1  from '../assets/interface.png'
import logo2 from '../assets/profile-user.png'
import image1 from '../assets/back1.jpeg'
import cloth1 from '../assets/cloth1.jpeg'
import cloth2 from '../assets/cloth2.png'
import cloth3 from '../assets/cloth3.jpeg'
import cloth4 from '../assets/round-neck.jpeg'
import cloth5 from '../assets/cloth5.jpeg'
import model1 from '../assets/model1.jpeg'
import model2 from '../assets/model2.jpeg'
import model3 from '../assets/model3.jpeg'
import model4 from '../assets/model4.jpeg'
import model5 from '../assets/model5.jpeg'


export default function Home () {
// First clothes (Below best sellers)
    const data = [
        {
            key: '1',
            imageSource: cloth1,
            title: 'BLUE SHIRT',
            subtitle: 'TOP BOY',
            imageStyle: {},
            textContainerStyle: styles.blueTextContainer,
        },
        {
            key: '2',
            imageSource: cloth2,
            title: 'KNEE DRESS',
            subtitle: 'DRESS GIRL',
            imageStyle: styles.jusCloth,
            textContainerStyle: styles.redTextContainer,
        },
        {
            key: '3',
            imageSource: cloth3,
            title: 'TOP JACKET',
            subtitle: 'JACKET MALE',
            imageStyle: styles.difcloth,
            textContainerStyle: styles.jacketTextBox,
        },
        {
            key: '4',
            imageSource: cloth4,
            title: 'RED TOP',
            subtitle: 'KIDS TOP',
            imageStyle: styles.difcloth,
            textContainerStyle: styles.jacketTextBox,
        },
        {
            key: '5',
            imageSource: cloth5,
            title: "TOP AND DOWN",
            subtitle:'KIDS TOP AND DOWN',
            imageStyle: styles.difcloth,
            textContainerStyle: styles.jacketTextBox
        },
    ];

    const data2 = [
        {
            key: '1',
            imageSource: model1,
            imageStyle: styles.difcloth,
        },
        {
            key: '2',
            imageSource: model2,
            imageStyle: styles.difcloth,
        },
        {
            key: '3',
            imageSource: model3,
            imageStyle: styles.difcloth,
        },
        {
            key: '4',
            imageSource: model4,
            imageStyle: styles.difcloth,
        },
        {
            key: '5',
            imageSource: model5,
            imageStyle: styles.difcloth,
        }
    ]
    //Rendering first view
    const renderItem = ({ item }) => (
        <View>
            <Image source={item.imageSource} style={item.imageStyle} alt={item.title}/>
            <View style={item.textContainerStyle}>
                <Text style={styles.blueText1}>{item.title}</Text>
                <Text style={styles.blueText2}>{item.subtitle}</Text>
            </View>
        </View>
    );
    // Rendering second view
    const Rendering = ({item}) => (
        <View>
            <Image source={item.imageSource} style={item.imageStyle} alt="image"/>
        </View>
    )
    return(

      
        <SafeAreaView >
            <ScrollView>
            <View>
                <View style={styles.logoHead}>
                    <Image source={logo1} alt="Logo1" style={styles.logo}/>
                    <Image source={logo2} alt="logo2" style={styles.logo}/>
                </View>
                <View>
                    <TextInput style={styles.TextInput} placeholder="Search"/>       
                </View>
                <View>
                    <Image resizeMode="cover" source={image1} style={styles.Background}>
                    </Image>
                    <Text style={styles.BackgroundText}>NEW COLLECTION</Text>
                </View>
                <View>
                    <Text style={styles.bestSellers}>BEST SELLERS</Text>
                </View>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <View>
                <Text style={styles.popular}>POPULAR OUTFITS</Text>
            </View>
            <FlatList 
            data={data2}
            renderItem={Rendering}
            keyExtractor={item => item.key}
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
            />
            </View>
            </ScrollView>
            <View style={styles.footer}>
            <Entypo name="home" size={30} color="black" style={styles.home}/>
                <AntDesign name="hearto" size={30} color="black" />
                <Feather name="shopping-bag" size={30} color="black" style={styles.shop} />
            </View>
        </SafeAreaView>
        
        
    )
}

const styles =  StyleSheet.create({
   
    logoHead: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginTop: Platform.OS === 'ios' ? 10 : 50,
    },
    logo:{
        width: 40, 
        height: 40
    },
    TextInput: {
        width: '80%',
        height: 30,
        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: 25,
        marginLeft: 40,
        padding: 15,
        borderRadius: 15,
        borderColor: '#B2BEB5'
    },
    Background: {
        width: '80%',
        height: 180,
        borderRadius: 20,
        marginLeft: 40,
        marginTop: 30,
    },
    BackgroundText: {
        fontWeight: '900',
        fontSize: 25,
        marginTop: -110,
        marginLeft: 80,
        color: '#fff'
    },
    bestSellers: {
        marginTop: 120,
        marginLeft: 40,
        fontSize: 20,
        fontWeight: '500',
        color: '#808080'
    },
    clothMain: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    blueText1: {
        fontSize: 13,
        color: '#808080',
    },
    blueText2: {
        fontSize: 10,
        color: '#808080'
    },
    blueTextContainer: {
        marginLeft: 40,
    },
    redTextContainer: {
        marginLeft: -10,
    },
    jusCloth: {
        height: 140,
        width: 100,
        marginTop: 10,
        marginLeft: -15
    }, 
    difcloth: {
        height: 130,
        width: 100,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 10,
    },
    jacketTextBox: {
        marginTop: 10,
        marginLeft: 25
    },
    popular: {
        marginTop: 25,
        marginLeft: 40,
        fontSize: 20,
        fontWeight: '500',
        color: '#808080'
    },
    footer: {
        marginTop: -30,
        height: 70,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    home: {
        marginLeft: 30
    },
    shop: {
        marginRight: 30,
    }
})
