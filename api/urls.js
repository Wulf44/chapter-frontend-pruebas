const AUTHOR_ID = 12;
const MARVEL_URL = 'https://bp-marvel-api.herokuapp.com/marvel-characters';
const GET_CHARACTERS_BY_AUTHOR_URL = `${MARVEL_URL}?idAuthor=${AUTHOR_ID}`;
const GET_CHARACTERS_BY_CHARACTER_URL = `${MARVEL_URL}?idAuthor=${AUTHOR_ID}&title=`;
export { GET_CHARACTERS_BY_AUTHOR_URL, GET_CHARACTERS_BY_CHARACTER_URL };