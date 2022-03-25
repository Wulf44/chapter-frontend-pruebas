import React from 'react';
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
 
deleteCharacter = (characterId) => {
  this.setState(this.state.characters.splice(characterId,1));
};

render(){
 return (
  <Context.Provider 
   value={{
    characters: this.state.characters,
    addCharacter: this.addCharacter,
    deleteCharacter: this.deleteCharacter,
    setCharacters: this.setCharacters
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}