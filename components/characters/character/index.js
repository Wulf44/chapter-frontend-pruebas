import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default class Character extends Component {
    render() {
        const { character }  = this.props;
        const { body, image, title } = character;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: image,
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textFields}>{title}</Text>
                <Text style={styles.textFields}>{body}</Text>
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
