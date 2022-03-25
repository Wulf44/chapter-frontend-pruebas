import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconBtnProps, Text } from './Themed';

export function TextButton(props: IconBtnProps) {
  return <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <FontAwesome size={10} {...props} />
    <Text
      style={styles.text}
    >
    </Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  text: { margin: 8, fontSize: 10 },
  container: { alignItems: 'center', backgroundColor: '#931010', padding: 8, flex: 1, margin: 8 },
})
