
import { BASE_URL } from '../config';

export default class Fetch {
    static async fetch(options) {
        
        const {
            headers,
            method,
            body,
            path,            
        } = options;

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',                
                ...headers,
            },
            method,
        };

        if (body) {
            requestOptions.body = JSON.stringify(body);
        }
       
        // Fire the Request and Return the response promise Object
        const requestPromise = await fetch(new Request(`${BASE_URL}${path}`, requestOptions));        
        if (requestPromise) {            
            // Check ::: it can be not json, for example text/html
            const requestResult = requestPromise.text().then(text => text
                ? JSON.parse(text)
                : body
            );          

            return requestResult;
        }

        return body;
    }

    /* GET (retrieve) */
    static get = options => Fetch.fetch({ ...options, method: 'GET' });

    /* POST (create) */
    static post = options => Fetch.fetch({ ...options, method: 'POST' });

    /* PUT (update) */
    static put = options => Fetch.fetch({ ...options, method: 'PUT' });;

    /* DELETE (remove) */
    static delete = options => Fetch.fetch({ ...options, method: 'DELETE' });
}