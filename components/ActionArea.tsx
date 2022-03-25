import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput } from 'react-native';
import { TextButton } from './StyledTextButton';
import { View } from './Themed';

type Callback = () => void
type CallbackWithParam = (param: string) => void

export default function ActionArea({ onSearch, onNew }: { onSearch: CallbackWithParam, onNew: Callback  }) {
  return (
    <View style={styles.container}>
      <TextButton
        name="plus"
        size={20}
        color="white"
        onPress={onNew}
      >
        Nuevo
      </TextButton>
      <View style={styles.searchArea}>
       <FontAwesome size={20} style={{ flex: 1, marginTop: 10, marginLeft: 10 }} name="search" />
       <TextInput
        style={styles.input}
        onChangeText={onSearch}
        placeholder="Buscar"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    flex: 2
  },
  searchArea: {
    flexDirection: 'row',
    borderWidth: 1,
    flex: 1,
    margin: 4
  }
});
