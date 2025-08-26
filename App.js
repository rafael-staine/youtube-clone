import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.content}>

      </View>
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