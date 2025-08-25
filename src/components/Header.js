import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header() {
    return (
        <View style={style.header}>

            {/* Logo */}
            <View style={style.logoContainer}>
                <AntDesign name="youtube" size={28} color="red" />
                <Text style={style.textHeader}>YouTube</Text>
            </View>

            {/* Ícones */}
            <View style={style.iconsContainer}>
                <MaterialIcons name="connected-tv" size={24} color="#fff" />
                <Feather name="bell" size={24} color="#fff" />
                <Feather name="search" size={24} color="#fff" /> 
                <Entypo name="menu" size={28} color="#fff" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 6,
    },

    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
})
