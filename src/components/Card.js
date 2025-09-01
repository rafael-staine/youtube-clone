import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function Card({ titulo, subtitle, img, imgCanal, tempo}) {
    return (
        <View style={styles.container}>

            <View style={styles.cardsContainer}>
                <Image
                    source={img}
                    style={styles.fotoVideo}
                />

                <View style={styles.containerTempo}>
                    <Text style={styles.tempo}>{tempo}</Text>
                </View>
            </View>

            <View style={styles.informacao}>
                <Image
                    source={imgCanal}
                    style={styles.fotoCanal}
                />

                <View style={styles.texts}>
                    <Text style={styles.title} numberOfLines={2}>{titulo}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

                <FontAwesome6 name="ellipsis-vertical" size={20} color="#fff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        backgroundColor: "#000",
        paddingBottom: 10,
    },

    cardsContainer: {
        position: "relative",
    },

    fotoVideo: {
        width: "100%",
        height: 220,
    },

    containerTempo: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(0,0,0,0.8)",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },

    tempo: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },

    informacao: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingTop: 15,
    },

    fotoCanal: {
        width: 36,
        height: 36,
        borderRadius: 50,
        marginRight: 10,
    },

    texts: {
        flex: 1,
    },

    title: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#aaa",
        fontSize: 12,
        marginTop: 2,
    },
});

export default Card;
