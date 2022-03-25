import { useEffect, useContext, useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { getDigimonPaginated } from '../api';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Context from '../context/context';
import Digimons from '../components/digimons';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const context = useContext(Context);
  const [pageCurrent, setpageCurrent] = useState(1);

  useEffect (() => {
    getDigimonPaginated((data: any) => {
      context.setDigimons(data);
    }, () => {}, 2, pageCurrent);
    return () => {}
}, [pageCurrent])

  const handlePreviousPage = () => {
    console.log("previous page clicked", pageCurrent)
    // Do this so your page can't go negative
    setpageCurrent(pageCurrent - 1<1?1:pageCurrent - 1)
  }

  const handleNextPage = () => {
    console.log("next page clicked", pageCurrent)
    setpageCurrent(pageCurrent + 1)   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digimons</Text>
      {context && context.digimons && context.digimons.length > 0 && <Digimons />}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', margin: 24, width: '100%' }}>
        <Button
          onPress={handlePreviousPage}
          title="Previous"
          color="#841584"
          accessibilityLabel="previous"
        />
        <Button
          onPress={handleNextPage}
          title="Next"
          color="#841584"
          accessibilityLabel="next"
        />
      </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
