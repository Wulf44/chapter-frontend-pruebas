import {AUTHOR_ID, GET_CHARACTERS_BY_AUTHOR_URL, GET_CHARACTERS_BY_CHARACTER_URL, MARVEL_URL} from './urls';

async function getMarvelCharacter(onSuccessCallback, onErrorCallback) {
    fetch(GET_CHARACTERS_BY_AUTHOR_URL)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

async function getMarvelCharacterByTitle(onSuccessCallback, onErrorCallback, title) {
    fetch(`${GET_CHARACTERS_BY_CHARACTER_URL}${title}`)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

async function deleteMarvelCharacterByID(onSuccessCallback, onErrorCallback, id) {
    fetch(`${MARVEL_URL}/${id}?idAuthor=${AUTHOR_ID}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

export { getMarvelCharacter, getMarvelCharacterByTitle, deleteMarvelCharacterByID }