import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
    return (
        <View>
            <View style={styles.header}>
                {/* Logo - nome */}
                <View style={styles.logoContainer}>
                    <AntDesign name="youtube" size={28} color="red" />
                    <Text style={styles.textHeader}>YouTube</Text>
                </View>

                {/* Ícones */}
                <View style={styles.iconsContainer}>
                    <MaterialIcons name="connected-tv" size={24} color="#fff" />
                    <Feather name="bell" size={24} color="#fff" />
                    <Feather name="search" size={24} color="#fff" />
                    <Entypo name="menu" size={24} color="#fff" />
                </View>
            </View>

            {/* Abas */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
                <View style={styles.compassIcon}>
                    <FontAwesome5 name="compass" size={24} color="#fff" />
                </View>
                <View style={styles.tab}><Text style={styles.tabText}>Tudo</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Novidades para você</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Música</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Jogos</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Notícias</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Ao vivo</Text></View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#000',
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

    tabs: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingLeft: 10,
    },

    tab: {
        backgroundColor: '#222',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginRight: 10,
    },

    tabText: {
        color: '#fff'
    },

    compassIcon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
}

})
