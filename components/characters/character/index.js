import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from '../../Themed';
import { IconButton } from '../../StyledIconButton';


export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
    }

    render() {
        const { character } = this.props;
        const { isEditable } = this.state;
        const { body, image, title } = character;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: image,
                    }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textFields} lightColor="white" darkColor='white'>{title}</Text>
                    {isEditable && <Text style={styles.textFields} lightColor="white" darkColor='white'>{body}</Text>}
                    {!isEditable && <View style={styles.buttonContainer}>
                        <IconButton name="pencil"
                            size={30}
                            color="red"
                        />
                        <IconButton name="trash"
                            size={30}
                            color="red"
                        />
                    </View>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        height: 400
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {  backgroundColor: 'black', margin: 16, padding: 8, width: 300 },
    textContainer: { flexDirection: 'column' },
    textFields: { height: 36 }
})
