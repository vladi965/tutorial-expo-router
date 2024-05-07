import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Hola! Vladimir</Text>
          <Text>Aun no tiene una cuenta 
            <Text>Ingrese</Text>
          </Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 40
    },
});