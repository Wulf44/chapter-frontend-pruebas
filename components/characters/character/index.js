import React, { Component } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Text } from "../../Themed";
import { IconButton } from "../../StyledIconButton";
import Context from "../../../context/context";

export default class Character extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      character: {},
      title: '',
      image: '',
      body: '', 
      category: '',
    };
    this.onEditCharacter = this.onEditCharacter.bind(this);
    this.onDeleteCharacter = this.onDeleteCharacter.bind(this);
    this.onSaveInfo = this.onSaveInfo.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onImageChanged = this.onImageChanged.bind(this);
    this.onBodyChanged = this.onBodyChanged.bind(this);
    this.setProperty = this.setProperty.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.character !== state.character) {
      return {
        character: props.character,
      };
    }
    return null;
  }

  onEditCharacter() {
    this.setState({ isEditable: true });
  }

  onTitleChanged(title) {
      console.log('state', this.state);
      this.setState({ title: title });
  }
  onImageChanged(image) {
    this.setState({ image: image});
  }
  onBodyChanged(body) {
    this.setState({ body: body});
  }

  onCategoryChanged(category) {
    this.setState({ category: category});
  }

 

  setProperty(object, value, defaultValue, propName) {
    if(value === ''){
        object[propName] = defaultValue;
    } else{
        object[propName] = value;
    }
  }

  onSaveInfo() {
    const { body, image, title, category, character } = this.state;
    const { refreshList } = this.props;

    this.setState({ isEditable: false });
    let newCharacter ={};
    this.setProperty(newCharacter, body, character.body, 'body' );
    this.setProperty(newCharacter, image, character.image, 'image' );
    this.setProperty(newCharacter, title, character.title, 'title' );
    this.setProperty(newCharacter, category, character.category, 'category' );

    this.context.updateCharacter(refreshList, character._id, newCharacter);
  }

  onCancel() {
    this.setState({ isEditable: false });
  }

  onDeleteCharacter() {
    const { character, refreshList } = this.props;
    this.context.deleteCharacter(refreshList, character._id);
  }

  render() {
    const { isEditable, character } = this.state;
    const { body, image, title, category } = character;
    return (
      <View style={styles.container}>
        {!isEditable && <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
        />}
        <View style={styles.textContainer}>
          {!isEditable && <Text style={styles.textFields} lightColor="white" darkColor="white">
            {title}
          </Text>}
          {isEditable && (
            <View style={styles.editableSection}>
              <Text
                style={styles.textFields}
                lightColor="white"
                darkColor="white"
              >
                Título:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="título"
                defaultValue={title}
                onChangeText={this.onTitleChanged}
              />
            </View>
          )}
          {isEditable && (
            <View style={styles.editableSection}>
              <Text
                style={styles.textFields}
                lightColor="white"
                darkColor="white"
              >
                Descripción:
              </Text>
              <TextInput
                multiline={true}
                style={styles.inputDescription}
                placeholder="Descripción"
                defaultValue={body}
                onChangeText={this.onBodyChanged}
              />
            </View>
          )}
          {isEditable && (
            <View style={styles.editableSection}>
              <Text
                style={styles.textFields}
                lightColor="white"
                darkColor="white"
              >
                URL:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="URL"
                defaultValue={image}
                onChangeText={this.onImageChanged}
              />
            </View>
          )}
          {isEditable && (
            <View style={styles.editableSection}>
              <Text
                style={styles.textFields}
                lightColor="white"
                darkColor="white"
              >
                Categoría:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Categoría"
                defaultValue={category}
                onChangeText={this.onCategoryChanged}
              />
            </View>
          )}
          {!isEditable && (
            <View style={styles.buttonContainer}>
              <IconButton
                name="pencil"
                size={30}
                color="red"
                onPress={this.onEditCharacter}
              />
              <IconButton
                name="trash"
                size={30}
                color="red"
                onPress={this.onDeleteCharacter}
              />
            </View>
          )}
          {isEditable && (
            <View style={styles.buttonContainer}>
              <IconButton
                name="save"
                size={30}
                color="red"
                onPress={this.onSaveInfo}
              />
              <IconButton
                name="times"
                size={30}
                color="red"
                onPress={this.onCancel}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: 400,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  container: { backgroundColor: "black", margin: 16, padding: 8, width: 300 },
  textContainer: { flexDirection: "column" },
  textFields: { height: 36 },
  input: { backgroundColor: "white", marginVertical: 8 },
  inputDescription: { backgroundColor: "white", marginVertical: 8, height: 100, flexWrap: 'wrap' },
  editableSection: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});
