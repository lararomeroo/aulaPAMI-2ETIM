import { StyleSheet } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#dabfff',
        padding:8,
    },
    titulo:{
        //fontSize:20,
        fontSize: RFValue (20),
        color: '#fafafa',
    },
    texto:{
        fontSize: 18,
        color: '#000000',

    },

    
});

export default styles;