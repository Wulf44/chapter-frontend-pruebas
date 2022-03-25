import { useEffect, useContext } from 'react';
import { Alert, Button, StyleSheet } from 'react-native';
import { getMarvelCharacter } from '../api';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Context from '../context/context';
import Characters from '../components/characters';
import { mainTitle } from '../res/strings';
import ActionArea from '../components/ActionArea';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const context = useContext(Context);

  useEffect (() => {
    refreshList('');
    return () => {}
}, [])

const refreshList = (_response: any) => {
  getMarvelCharacter((data: any) => {
    context.setCharacters(data);
  }, () => {});
}

function onNew() {

}

function onSearch(title: string) {
  context.searchCharacters((data: any) => {
    context.setCharacters(data);
  }, title);
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mainTitle}</Text>
      <ActionArea onNew={onNew} onSearch={onSearch} />
      {context && context.characters && context.characters.length > 0 && <Characters refreshList={refreshList} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 24,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
