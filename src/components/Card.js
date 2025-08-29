import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function Card() {
    return (
        <View style={styles.container}>
            {/* Thumbnail do vídeo */}
            <View style={styles.thumbnailContainer}>
                <Image
                    source={{
                        uri: "",
                    }}
                    style={styles.thumbnail}
                />

                {/* Tempo de duração */}
                <View style={styles.durationContainer}>
                    <Text style={styles.duration}>7:24</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                {/* Foto do canal */}
                <Image
                    source={{
                        uri: "",
                    }}
                    style={styles.avatar}
                />

                {/* Textos */}
                <View style={styles.texts}>
                    <Text style={styles.title} numberOfLines={2}>
                        #basscam Só tú és Santo / Uma Coisa | Morada - Ao Vivo em Belo Horizonte
                    </Text>
                    <Text style={styles.subtitle}>
                        Moisés Henrique · 21 mil visualizações · há 4 semanas
                    </Text>
                </View>

                <FontAwesome6 name="ellipsis-vertical" size={24} color="#fff" />
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
    thumbnailContainer: {
        position: "relative",
    },
    thumbnail: {
        width: "100%",
        height: 220,
    },
    durationContainer: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(0,0,0,0.8)",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    duration: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    avatar: {
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
