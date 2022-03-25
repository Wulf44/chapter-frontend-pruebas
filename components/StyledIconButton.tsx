import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconBtnProps } from './Themed';

export function IconButton(props: IconBtnProps) {
  return <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
    </TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
  container:{ alignItems: 'center', backgroundColor: '#fafafa', padding: 8, flex: 1, margin: 8  },
})
