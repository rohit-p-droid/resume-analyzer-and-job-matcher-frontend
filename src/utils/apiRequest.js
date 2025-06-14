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
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if(data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${config.API_URL}${url}`, options);

        // if the token is expired refresh the token and send response
        if(response.status == 401) {
            console.log("Token expired getting new token");
            await fetch(`${config.API_URL}/auth/refresh-token`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
            });

            const response = await fetch(`${config.API_URL}${url}`, options);
            return response.json();
        }

        return response.json();
    } catch (error) {
        throw error;
    }
}