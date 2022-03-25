import {DIGIMON_URL} from './urls';

async function getDigimon(onSuccessCallback, onErrorCallback) {
    fetch(DIGIMON_URL)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}
async function getDigimonPaginated(onSuccessCallback, onErrorCallback, limit, pageCurrent) {
    fetch(`${DIGIMON_URL}?pageSize=${limit}&page=${pageCurrent}`)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

export { getDigimon, getDigimonPaginated }