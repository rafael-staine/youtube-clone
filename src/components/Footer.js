import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.icones}>

                <View style={styles.iconContainer}>
                    <Entypo name="home" size={24} color="#fff" />
                    <Text style={styles.title}>Início</Text>
                </View>

                <View style={styles.iconContainer}>
                    <SimpleLineIcons name="social-youtube" size={24} color="#fff" />
                    <Text style={styles.title}>Shorts</Text>
                </View>

                <View style={styles.iconContainer}>
                    <AntDesign name="pluscircleo" size={24} color="#fff" />
                    <Text style={styles.title}>Adicionar</Text>
                </View>

                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="youtube-subscription" size={24} color="#fff" />
                    <Text style={styles.title}>Biblioteca</Text>
                </View>

                <View style={styles.iconContainer}>
                    <FontAwesome name="user-circle-o" size={24} color="#fff" />
                    <Text style={styles.title}>Você</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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

    icones: {
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

    title: {
        color: '#fff',
        marginTop: 2,
        fontSize: 11,
    }
})

export default Footer
