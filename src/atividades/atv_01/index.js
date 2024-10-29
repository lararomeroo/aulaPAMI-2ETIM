import { View, Text } from 'react-native'
import styles from './styles'

export default function Atividada1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Introdução do React Native</Text>
            <Text style={styles.texto}> Romero linda!</Text>
        </View>
    );
}