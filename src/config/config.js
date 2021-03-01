import queryString from 'query-string';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${window.env.APP_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${window.env.API_KEY}`,
            Origin: 'localhost',
            withCredentials: true
        }
    })
}