const SHOWS = "http://api.tvmaze.com/shows";
const SCHEDULE = "http://api.tvmaze.com/schedule";
const SHOWS_DETAIL = "http://api.tvmaze.com/shows/1";

export function getShows() {
    return fetch(SHOWS, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

export function getShowDetail() {
    return fetch(SHOWS_DETAIL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

export function getSchedule() {
    return fetch(SCHEDULE, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}