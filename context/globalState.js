import React from 'react';
import { deleteMarvelCharacterByID, getMarvelCharacterByTitle } from '../api';
import Context from './context';

export default class GlobalState extends React.Component{
state = {
  characters: [],
}
 
addCharacter = (Character) => {
  const list = [...this.state.characters, Character];
  this.setState({characters: list});
};

setCharacters = (characters) => {
  this.setState({characters});
};

searchCharacters = (onSuccess, title) => {
  getMarvelCharacterByTitle(onSuccess,() =>{}, title);
};
 
deleteCharacter = (onSucces, characterId) => {
  deleteMarvelCharacterByID(onSucces, () => {}, characterId);
};

render(){
 return (
  <Context.Provider 
   value={{
    characters: this.state.characters,
    addCharacter: this.addCharacter,
    deleteCharacter: this.deleteCharacter,
    setCharacters: this.setCharacters,
    searchCharacters: this.searchCharacters,
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}