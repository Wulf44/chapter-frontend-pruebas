import { useEffect, useContext } from 'react';
import { Button, StyleSheet } from 'react-native';
import { getMarvelCharacter } from '../api';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Context from '../context/context';
import Characters from '../components/characters';
import { mainTitle } from '../res/strings';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const context = useContext(Context);

  useEffect (() => {
    getMarvelCharacter((data: any) => {
      context.setCharacters(data);
    }, () => {});
    return () => {}
}, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mainTitle}</Text>
      {context && context.characters && context.characters.length > 0 && <Characters />}
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
