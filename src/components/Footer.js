import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

function Footer() {
    return (
        <View style={style.footer}>
            <View style={style.iconsRow}>

                <View style={style.iconContainer}>
                    <Entypo name="home" size={24} color="#fff" />
                    <Text style={style.iconText}>Início</Text>
                </View>

                <View style={style.iconContainer}>
                    <SimpleLineIcons name="social-youtube" size={24} color="#fff" />
                    <Text style={style.iconText}>Shorts</Text>
                </View>

                <View style={style.iconContainer}>
                    <AntDesign name="pluscircleo" size={30} color="#fff" />
                    <Text style={style.iconText}>.</Text>
                </View>

                <View style={style.iconContainer}>
                    <MaterialCommunityIcons name="youtube-subscription" size={24} color="#fff" />
                    <Text style={style.iconText}>Biblioteca</Text>
                </View>

                <View style={style.iconContainer}>
                    <FontAwesome name="user-circle-o" size={24} color="#fff" />
                    <Text style={style.iconText}>Você</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: '#000',
        borderTopWidth: 0.5,
        borderTopColor: '#333',
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingBottom: 8,
    },
    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        color: '#fff',
        marginTop: 2,
        fontSize: 11,
    }
})

export default Footer
