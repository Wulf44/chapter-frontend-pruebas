import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default class Digimon extends Component {
    render() {
        const { digimon }  = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: digimon.img,
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textFields}>{digimon.name}</Text>
                <Text style={styles.textFields}>{digimon.level}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 200,
        height: 200,
    },
    container:{ flex: 1, backgroundColor: '#fafafa', margin: 4 },
    textFields:{ color: 'black', height: 36 }
})
