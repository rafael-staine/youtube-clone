import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.content}>
        <Card
          titulo="Build a Full Stack Mobile Application with React Native & Expo - React Native Tutorial"
          subtitle="Codesistency · 147 mil visualizações · há 3 meses"
          img="https://i.ytimg.com/vi/vk13GJi4Vd0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB4pZvoOpijP504EeQzQM2CyD3woA"
          imgCanal="https://yt3.googleusercontent.com/1T6rmeQ-uCo_K4cYsCYB3wdfGN51nh3pDA8NSSkFzozrZf3L4NcdXQSlDIL0mfq9w1osWeDdtg=s160-c-k-c0x00ffffff-no-rj"
          tempo="3:49:31"
        />

        <Card
          titulo="Build a Full Stack Mobile Application with React Native & Expo - React Native Tutorial"
          subtitle="Codesistency · 147 mil visualizações · há 3 meses"
          img="https://i.ytimg.com/an_webp/uBdpV9GGlzo/mqdefault_6s.webp?du=3000&sqp=CNKNyMUG&rs=AOn4CLDd5IR4VD4jsi3Jn63WFjhF1C4jCg"
          imgCanal="https://yt3.googleusercontent.com/1T6rmeQ-uCo_K4cYsCYB3wdfGN51nh3pDA8NSSkFzozrZf3L4NcdXQSlDIL0mfq9w1osWeDdtg=s160-c-k-c0x00ffffff-no-rj"
          tempo="3:49:31"
        />

      </View>
      <Footer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    flex: 7,
    width: '100%',
    backgroundColor: '#000',
    padding: 10,
  },
});