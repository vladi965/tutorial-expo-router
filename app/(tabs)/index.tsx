import { StyleSheet, Pressable} from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Link href="/three" asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Tab Three</Text>
        </Pressable>
      </Link>
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
  },
  btn: {
    marginTop: 40,
    backgroundColor: "#d4f3d4",
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  btnText: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
