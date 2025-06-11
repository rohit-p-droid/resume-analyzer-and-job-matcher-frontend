import config from "../config/config";

export async function apiRequest({
    url,
    method="GET",
    data=null,
    headers={}
}) {
    try {
        const options = {
            method: method,
            credentails: "include",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if(data) {
            options.body = JSON.stringify(data);
        }

        const fullUrl = `${config.API_URL}${url}`;
        console.log(fullUrl)

        const response = await fetch(fullUrl, options)

        return response.json();
    } catch (error) {
        throw error;
    }
}