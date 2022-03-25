import React from 'react';

export default React.createContext({
  characters: [],
  addCharacter : (character) => {},
  setCharacters : (characters) => {},
  deleteCharacter : (characterId) => {}
});