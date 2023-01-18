import axios from 'axios';

type Response = {
    ok: boolean;
    result: {
        short_link: string;
        full_short_link: string;
    };
};

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

export async function getShortenedURL(url: string): Promise<Response> {
    return axios
        .get<Response>(`${API_URL}${url}`)
        .then(response => response.data);
}
