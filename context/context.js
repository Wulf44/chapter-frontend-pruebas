import React from 'react';

export default React.createContext({
  characters: [],
  addCharacter : (character) => {},
  setCharacters : (characters) => {},
  searchCharacters : (onSucces, title) => {},
  deleteCharacter : (onSuccess, characterId) => {}
});