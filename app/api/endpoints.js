const SHOWS = "http://api.tvmaze.com/shows";
const SCHEDULE = "http://api.tvmaze.com/schedule";
const SHOWS_DETAIL = "http://api.tvmaze.com/shows/";

export function getShows() {
    return fetch(SHOWS, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

export function getShowDetail(id) {
    return fetch(SHOWS_DETAIL + id, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

export function getSchedule() {
    return fetch(SCHEDULE, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}